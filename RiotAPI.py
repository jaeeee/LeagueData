#from riotwatcher import LolWatcher, ApiError
import pandas as pd
import requests
import matplotlib.pyplot as plt
import json
import time
import sys

APIKey = 'RGAPI-e847d061-0f5e-4a86-9d3c-e0b23314a8b1'
region = 'na1'
rank = 'b'
division = 'c'
displace = 1
option = '-1'
username = ''
temp = 1

#lol_watcher = LolWatcher(APIKey)
my_region = 'na1'

def getNextInfo(region, rank, division, page, APIKey):
    url = "https://" + region + ".api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/" + rank + "/" + division + "?page=" + str(page) + "&api_key=" + APIKey
    response = requests.get(url)
    return response.json()

def getNextUrl(region, rank, division, page, APIKey):
    return "https://" + region + ".api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/" + rank + "/" + division + "?page=" + str(page) + "&api_key=" + APIKey

def getUrl(region, rank, division, APIKey):
    global displace
    if rank == 'MASTER':
        temp = "https://" + region + ".api.riotgames.com/lol/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5?api_key=" + APIKey
        displace = 1001
        return temp
    elif rank == 'GRANDMASTER':
        temp = "https://" + region + ".api.riotgames.com/lol/league/v4/grandmasterleagues/by-queue/RANKED_SOLO_5x5?api_key=" + APIKey
        displace = 301
        return temp
    elif rank == 'CHALLENGER':
        temp = "https://" + region + ".api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=" + APIKey
        displace = 1
        return temp
    else:
        temp = "https://" + region + ".api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/" + rank + "/" + division + "?page=1&api_key=" + APIKey
        return temp

def is_empty(obj):
    if obj:
        return True
    else:
        return False

def getPlayerInput():
    print("\nLet's check players info from any specific rank")
    global region, rank, division
    region = (str)(input('Enter the region (ONLY BR1, EUN1, EUW1, JP1, KR, LA1, LA2, NA1, OC1, RU, TR1 are supported): '))
    #region = 'NA1'
    rank = (str)(input('Enter the rank (IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, CHALLENGER): '))
    #rank = 'MASTER'
    if (rank == 'MASTER' or rank == 'GRANDMASTER' or rank == 'CHALLENGER'):
        division = 'I' #These ranks only have one division, so the division is defaulted to I
        return
    division = (str)(input('Enter the division (I, II, III, IV): '))
    #division = 'I'
    
def getUserOption():
    global option
    print('Choose an option: ')
    print('1 - Search a player\'s ranked stats (NA only for now)')
    print('2 - Display a list of players in any rank')
    print('0 - Quit')
    option = (str)(input('option: '))

def getPlayerRankedStats(df): #Only NA1 region for now
    #global region
    #region = (str)(input('Enter the region (ONLY BR1, EUN1, EUW1, JP1, KR, LA1, LA2, NA1, OC1, RU, TR1 are supported): '))
    username = ''
    while username != '!q':
        username = (str)(input('Enter the name here (!q to quit): '))
        if username == '!q':
            sys.exit()
        print(df.loc[df['summonerName'].str.lower()==username.lower()][['summonerName','tier','rank','leaguePoints']])
    return

def getPlayerBase(region):
    start_time = time.time()
    global rank, division, nextPage
    bigdf = pd.DataFrame()
    for rank in ['CHALLENGER','GRANDMASTER','MASTER']:
        tempdf = pd.read_json(getUrl(region,rank,division,APIKey))        
        tempdf = pd.json_normalize(tempdf['entries'])
        tempdf['tier'] = rank
        bigdf = bigdf.append(tempdf, ignore_index=True)
    time.sleep(120)
    for rank in ['DIAMOND','PLATINUM','GOLD','SILVER','BRONZE','IRON']:
        for division in ['I','II','III','IV']:
            time.sleep(60)
            nextPage = 2
            tempdf2 = pd.read_json(getUrl(region, rank, division, APIKey))
            nextInfo = pd.read_json(getNextUrl(region,rank,division,nextPage,APIKey))
            tempNextInfo = nextInfo
            while not is_empty(tempNextInfo.empty): #Checks if the next page of data is empty on the API
                tempdf2 = tempdf2.append(tempNextInfo, ignore_index = True) 
                nextPage = nextPage + 1
                tempNextInfo = pd.read_json(getNextUrl(region,rank,division,nextPage,APIKey))
                time.sleep(1)
            bigdf = bigdf.append(tempdf2, ignore_index=True)
    
    bigdf['tier'] = pd.Categorical(bigdf['tier'], ordered=True, categories=['IRON','BRONZE','SILVER','GOLD','PLATINUM','DIAMOND','MASTER','GRANDMASTER','CHALLENGER'])
    bigdf['rank'] = pd.Categorical(bigdf['rank'], ordered=True, categories=['IV','III','II','I'])
    bigdf.sort_values(['tier','rank','leaguePoints'], ascending=False, inplace=True)
    bigdf.drop_duplicates('summonerName',keep='first',inplace=True)
    bigdf = bigdf.reset_index(drop=True)
    bigdf.index = bigdf.index + temp
    print(bigdf[['summonerName','tier','rank','leaguePoints']])
    bigdf.to_csv("newData.csv")
    print("This program took" ,time.time() - start_time, "seconds to execute.")
    

def getListSpecificRank():
    getPlayerInput()
    global nextPage
    nextPage = 2
    df = pd.DataFrame()
    print("Here is a current list of players in " + rank + " " + division)
    #Ranks from IRON to DIAMOND come from an API different from MASTER, GM, and CHALL
    if (rank == 'IRON' or rank == 'BRONZE' or rank == 'SILVER' or rank == 'GOLD' or rank == 'PLATINUM' or rank == 'DIAMOND'):
        df = pd.read_json(getUrl(region, rank, division, APIKey))
        nextInfo = pd.read_json(getNextUrl(region,rank,division,nextPage,APIKey))
        tempNextInfo = nextInfo
        while not is_empty(tempNextInfo.empty): #Checks if the next page of data is empty on the API
            df = df.append(tempNextInfo, ignore_index = True) 
            nextPage = nextPage + 1
            tempNextInfo = pd.read_json(getNextUrl(region,rank,division,nextPage,APIKey))
            time.sleep(.93) # .90 was too fast under Riot's request limitations while .95 isn't, so I settle with .93
    elif (rank == 'CHALLENGER' or rank == 'GRANDMASTER' or rank == 'MASTER'):    
        df = pd.read_json(getUrl(region,rank,division,APIKey))        
        df = pd.json_normalize(df['entries'])
        df['tier'] = rank
    df.sort_values(by=['leaguePoints'], ascending=False, inplace=True)
    df = df.reset_index(drop=True)
    df.index = df.index + displace
    print(df[['summonerName','tier','rank','leaguePoints']])
    nameInput = ''
    while nameInput != '!q':
        nameInput = (str)(input('Want to search for someone? Enter the name here (!q to quit): '))
        if nameInput == '!q':
            sys.exit()
        print(df.loc[df['summonerName'].str.lower()==nameInput.lower()][['summonerName','leaguePoints']])

def main():
    getUserOption()
    if option == '1':
        df = pd.read_csv("NA1PLAYERBASE.csv", low_memory=False)
        getPlayerRankedStats(df)
    elif option == '2':
        getListSpecificRank()
    elif option == '0':
        sys.exit()
    else:
        print("Invalid option: ending program")
        sys.exit()
    
    
if __name__ == "__main__":
    main()
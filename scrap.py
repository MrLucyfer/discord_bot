from bs4 import BeautifulSoup
import requests

def bertin_tweet():
    handle = 'BertinOsborne'
    ctr = 1
    res=requests.get('https://twitter.com/'+ handle)
    bs=BeautifulSoup(res.content,'lxml')   
    all_tweets = bs.find_all('div',{'class':'tweet'})
    if all_tweets:
        for tweet in all_tweets[:ctr]:
            content = tweet.find('div',{'class':'content'})
            
            message = content.find('div',{'class':'js-tweet-text-container'}).text.replace("\n"," ").strip()
            footer = content.find('div',{'class':'stream-item-footer'})
            return message
        
    else:
        print("List is empty/account name not found.")
        return None
    
message = bertin_tweet()
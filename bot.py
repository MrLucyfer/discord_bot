import os

import discord

token = 'NjIyMTM5NjIwMDQxMTYyNzUy.XXvjPg.rTE0W_SiAf7pYcdec75fjwe0KV8'

client = discord.Client()

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

client.run(token)
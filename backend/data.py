import requests
import pickle5 as pickle
import numpy as np

x = requests.get('http://127.0.0.1:8000/api/messages')

print(x.json()[-1]['state'])

# api_key = '37c11e2fd02e115cad5a8b1e16a246cd'

# weather = requests.get('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=37c11e2fd02e115cad5a8b1e16a246cd')

# print(weather.json()['main'])

# n, p, k, temp, humidity, ph, rainfall = 90, 42, 43, 20.87974371, 82.00274423, 6.502985292000001, 202.9355362

with open("../model.pkl", "rb") as f:
    model = pickle.load(f)
    ans = model.predict((np.array([[90,40,40,20,80,7,200]])))[0]
    print(model.predict((np.array([[90,40,40,20,80,7,200]])))[0])
    obj = {"crop": ans}
    url = 'http://127.0.0.1:8000/predictions/predict/'
    print(requests.post(url, data=obj))
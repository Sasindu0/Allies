import numpy as np
import pickle
from sklearn.preprocessing import StandardScaler

class modelPredict():

    global model
    model = pickle.load(open('model.pickle', 'rb'))



    def dataProcess(data):
        #print(data.data)
        
        lst = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        data = data.data

        lst[0] = float(data['amt'])
        #print(lst)
        lst[1] = int(data['trans_hour'])
        lst[int(data['category'])+1] = 1
        if data['genderMale'] == 'true':
            lst[17] == 1
        else:
            lst[16] == 1
        lst[int(data['day'])+17] = 1
        lst[int(data['age'])+24] = 1

        print(lst)

        result = modelPredict.pred(lst)

        if result == 1:
            return 'Fraud'
        else:
            return 'Not Fraud'


    def pred(lst):
        data = np.array([lst])
        #txt = np.delete(txt,30,1)

        scaler = StandardScaler()
        data = scaler.fit_transform(data)

        predict = model.predict(data)

        

        return predict[0]



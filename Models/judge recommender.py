from surprise import Dataset, Reader, SVD
from surprise.model_selection import train_test_split
from surprise import accuracy
import pandas as pd

class JudgeRecommender:
    def __init__(self, data_path):
        self.reader = Reader(rating_scale=(1, 5))
        self.data = Dataset.load_from_df(pd.read_csv(data_path)[['case_id', 'judge_id', 'rating']], self.reader)
        self.trainset, self.testset = train_test_split(self.data, test_size=0.2)
        self.model = SVD()
        self.model.fit(self.trainset)
    
    def recommend_judge(self, case_id, judge_id):
        prediction = self.model.predict(case_id, judge_id)
        return prediction.est

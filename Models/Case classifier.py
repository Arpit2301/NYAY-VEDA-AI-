from transformers import BertTokenizer, BertForSequenceClassification
import torch

class CaseClassifier:
    def __init__(self):
        self.tokenizer = BertTokenizer.from_pretrained("nlpaueb/legal-bert-base-uncased")
        self.model = BertForSequenceClassification.from_pretrained("nlpaueb/legal-bert-base-uncased", num_labels=5)
    
    def classify_case(self, text):
        inputs = self.tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=512)
        outputs = self.model(**inputs)
        prediction = torch.argmax(outputs.logits, dim=1).item()
        return prediction

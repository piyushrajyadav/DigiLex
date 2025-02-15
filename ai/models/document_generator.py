from openai import OpenAI
from ..utils.prompts import DOCUMENT_PROMPTS

class DocumentGenerator:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)
    
    def generate_document(self, doc_type, variables):
        """
        Generates legal documents based on type and variables
        Supported types: nda, employment_contract, lease_agreement
        """
        try:
            prompt = DOCUMENT_PROMPTS[doc_type].format(**variables)
            
            response = self.client.chat.completions.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": "You are a legal document generator. Generate accurate legal documents."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.2
            )
            
            return response.choices[0].message.content.strip()
        except KeyError:
            raise ValueError(f"Unsupported document type: {doc_type}")
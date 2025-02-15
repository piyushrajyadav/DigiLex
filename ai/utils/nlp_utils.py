import spacy

# Load English language model
nlp = spacy.load("en_core_web_sm")

def preprocess_input(text):
    """Clean and preprocess user input"""
    doc = nlp(text)
    # Remove stopwords and punctuation, lemmatize
    cleaned = [token.lemma_.lower() for token in doc if not token.is_stop and not token.is_punct]
    return " ".join(cleaned)
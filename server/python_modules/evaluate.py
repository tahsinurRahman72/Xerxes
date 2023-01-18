import sys
import os
import pickle

models_folder_path = 'F:/BRAC Undergraduate Courses/Thesis/Project/pdfGuardian/server/machine_models'
models = {}

for file in os.listdir(models_folder_path):
    if file.endswith(".sav"):
        file_path = os.path.join(models_folder_path, file)
        model_name = file.split(".")[0] # remove the .sav extension
        with open(file_path, 'rb') as file:
            models[model_name] = pickle.load(file)
extractedVal = sys.argv[1]
# Now you can use the loaded models to predict the value of `extractedVal`
for model_name, model in models.items():
    prediction = model.predict(extractedVal)
print(f"Prediction using {model_name}: {prediction}")
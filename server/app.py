from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow import keras
from fastapi.middleware.cors import CORSMiddleware


# Load the trained neural network model
model = keras.models.load_model("budget_allocation_model.h5")

# Create a FastAPI app instance
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define input data model using Pydantic


class InputData(BaseModel):
    Event_Type_Category: int
    Budget_Range_Category: int
    Number_of_People_Category: int

# Define a route to perform inference


@app.post("/predict/")
async def predict_budget(input_data: InputData):
    try:
        # Convert input data to a NumPy array
        input_array = np.array([[input_data.Event_Type_Category,
                                 input_data.Budget_Range_Category,
                                 input_data.Number_of_People_Category]])

        # Perform inference to predict budget allocations
        predicted_budgets = model.predict(input_array)

        # Return the predicted budget allocations as a dictionary
        return {
            "Venue (in Rupees)": float(predicted_budgets[0][0]),
            "Food (in Rupees)": float(predicted_budgets[0][1]),
            "Entertainment (in Rupees)": float(predicted_budgets[0][2]),
            "Decorations (in Rupees)": float(predicted_budgets[0][3]),
            "Transportation (in Rupees)": float(predicted_budgets[0][4]),
            "Staffing (in Rupees)": float(predicted_budgets[0][5]),
            "Miscellaneous (in Rupees)": float(predicted_budgets[0][6])
        }

    except Exception as e:
        return {"error": str(e)}

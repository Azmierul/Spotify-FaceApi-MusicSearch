import tensorflow as tf
import os
from tensorflow.keras.models import model_from_json
import tensorflowjs as tfjs

# Load the model architecture from JSON
with open('C:/Users/ebhak/OneDrive/Desktop/Emotion Detection Model/Spotify-FaceApi/Spotify-FaceApi-MusicSearch/public/models/emotion_model3.json', 'r') as json_file:
    loaded_model_json = json_file.read()

model = model_from_json(loaded_model_json)

# Load the model weights
model.load_weights('C:/Users/ebhak/OneDrive/Desktop/Emotion Detection Model/Spotify-FaceApi/Spotify-FaceApi-MusicSearch/public/models/emotion_model3.h5')

# Convert and save the model in TensorFlow.js format
tfjs_target_dir = 'public/models/tfjs_model'  # Change the target directory as needed
tfjs.converters.save_keras_model(model, tfjs_target_dir)


from fastapi import FastAPI, Body
from database import db

app = FastAPI()


@app.get("/")
def getRoutes():
    return ["/notes", "notes/<pk>"]


@app.get("/notes")
def getNotes():
    # notes = db.search_by_value("notesapp", "notes", "id", "*", get_attributes=["*"])
    notes = db.sql("SELECT * FROM notesapp.notes ORDER BY __updatedtime__ DESC")
    return notes


@app.get("/notes/{id}")
def getNote(pk: str):
    notes = db.search_by_hash("notesapp", "notes", [pk])
    return notes[0]


@app.post("/notes")
def addNotes(data=Body()):
    db.insert("notesapp", "notes", [{"body": data["body"]}])
    notes = db.search_by_value("notesapp", "notes", "id", "*", get_attributes=["*"])
    return notes


@app.put("/notes/{id}")
def updateNotes(pk: str, data=Body()):
    db.update("notesapp", "notes", [{"id": pk, "body": data["body"]}])
    notes = db.search_by_value("notesapp", "notes", "id", "*", get_attributes=["*"])
    return notes

import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://Admin:250312Jj@cluster0.e7owvnr.mongodb.net/ehoje")

let db = mongoose.connection;

export default db;
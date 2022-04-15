import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const teacherSchema = new Schema({
    name: {
        type: String,
        default: 'Ivan',
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    age: {
        type: Number,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

export const teacherModel = model('teacher', teacherSchema);

import mongoose from 'mongoose';
import { teacherModel } from './teachers';

const { Schema, model } = mongoose;

const studentsSchema = new Schema({
    name: {
        type: String,
        default: 'Volodymyr',
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
    teacher: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: teacherModel,
        },
    ],
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

studentsSchema.virtual('fullName').get(function () {
    // @ts-ignore
    // eslint-disable-next-line no-useless-concat
    return `${this.name}` + ' ' + 'veranda';
});

export const studentModel = model('student', studentsSchema);

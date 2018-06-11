import DonutsSchema from './schema';
import {Mongo} from "meteor/mongo";

const Donuts = new Mongo.Collection('donuts');

Donuts.attachSchema(DonutsSchema);

export default Donuts;
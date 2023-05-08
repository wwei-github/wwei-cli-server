"use strict";

const { Controller } = require("egg");
const { mongoose, model, Schema } = require("mongoose");
const { CONNECT_LINK, DATA_TABLE } = require("../../config/mongo");

const templateSchema = new Schema({
  title: String,
  version: String,
  npmName: String,
  type: String,
});

class ProjectController extends Controller {
  async getProjectTemplate() {
    const { ctx } = this;
    await mongoose.connect(CONNECT_LINK);

    const template = model(DATA_TABLE, templateSchema);
    const data = await template.find({});
    ctx.body = data;
  }
}

module.exports = ProjectController;

"use strict";

const { Controller } = require("egg");
const { mongoose, model, Schema } = require("mongoose");

const templateSchema = new Schema({
  name: String,
  age: Number,
});

class ProjectController extends Controller {
  async getProjectTemplate() {
    const { ctx } = this;
    await mongoose.connect(
      "mongodb+srv://wwei:U0pGaLba4HU9o40u@wwei-cli-mongodb.nnvb4vk.mongodb.net/wwei-cli-database"
    );

    const template = model("cli-project-test", templateSchema);
    const data = await template.find({});
    ctx.body = data;
  }
}

module.exports = ProjectController;

module.exports = class TodoDto {
    id;
    title;
    date;
    importance;
    completed;

    constructor(model) {
        this.id = model._id;
        this.title = model.title
        this.date = model.date;
        this.importance = model.importance;
        this.completed = model.completed
    }
}
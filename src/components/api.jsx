import axios from "axios";

//const endpoint = `https://jsonbox.io/box_${process.env.JSONBOX_KEY}`;
const endpoint = `https://jsonbox.io/box_41807ef22b93e22899da`;

const getAll = () => {
  return axios.get(endpoint + "/todos?sort=_createdOn");
};

const create = (todo) => {
  return axios.post(endpoint + "/todos", todo);
};

const destroy = (id) => {
  return axios.delete(endpoint + `/todos/${id}`);
};

export default {
  todos: {
    getAll,
    create,
    destroy,
  },
};

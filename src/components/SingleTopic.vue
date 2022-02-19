<template>
  <div class="project" :class="{ completed: project.complete }">
    <div class="actions">
      <h3 @click="showDetails">{{ project.title }}</h3>
      <div>
        <span
          v-if="!project.complete"
          @click="comProject"
          class="material-icons done"
          >done</span
        >
        <span
          v-if="project.complete"
          @click="comProject"
          class="material-icons close"
          >close</span
        >
        <router-link :to="{ name: 'EditTopic', params: { id: project.id } }">
          <span class="material-icons edit">edit</span>
        </router-link>
        <span @click="delProject" class="material-icons delete">delete</span>
      </div>
    </div>
    <div v-if="showDetail" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetail: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
      com: "",
    };
  },
  methods: {
    showDetails() {
      this.showDetail = !this.showDetail;
    },
    delProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },
    comProject() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => this.$emit("complete", this.project.id))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px Orgba(e, e, 0, 0.05);
  border-left: 4px solid #e90074;
}

.completed {
  border-left: 4px solid #42b983;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.done {
  cursor: pointer;
  color: #42b983;
}
.delete {
  cursor: pointer;
  color: crimson;
}
.edit {
  cursor: pointer;
  color: lightskyblue;
}

.close {
  cursor: pointer;
  color: crimson;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  transition: transform 0.2s;
  user-select: none;
}

.material-icons:hover {
  transform: scale(1.2);
}

h3 {
  cursor: pointer;
  color: #202020;
}
.details {
  color: rgb(179, 179, 179);
}
</style>

<template>
  <router-link
    v-slot="{ navigate }"
    custom
    :to="{ path: '/board/' + board.id }"
  >
    <div
      class="board"
      data-cy="board-item"
      @click="navigate"
      @mouseover="showStar = true"
      @mouseout="showStar = false"
    >
      <h1>
        {{ board.name }}
      </h1>
      <div
        v-show="showStar"
        data-cy="star"
        class="star"
        @click.stop="updateBoardStarred(board)"
      >
        <Star
          class="col-span-1 w-5 h-5"
          :class="[board.starred ? 'fill-current text-yellow-300' : 'stroke-current text-white']"
        />
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import Board from '@/typings/board';
import Star from '@/assets/icons/star.svg';
import axios from 'axios';
export default defineComponent({
  name: 'Board',
  components: {
    Star,
  },
  props: {
    board: {
      default: null,
      type: Object as PropType<Board>,
    },
  },
  data: function () {
    return {
      showStar: false,
    };
  },
  methods: {
    updateBoardStarred: function (board: Board) {
      let flag = !board.starred;
      axios.patch(`/api/boards/${board.id}`, {
        starred: flag,
      });
      board.starred = flag;
    },
  },
});
</script>

<style lang="postcss" scoped>
.board {
  @apply bg-blue7 w-72 h-36 px-4 py-3 cursor-pointer grid grid-cols-6 justify-between rounded-sm hover:bg-blue8;
}
.star {
  @apply justify-self-end self-start;
}
h1 {
  @apply text-white font-bold col-span-5;
}
</style>

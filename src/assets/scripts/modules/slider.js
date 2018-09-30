import Vue from 'vue';

const info = {
    template: "#slider-info",
    props : {
        work: Object
    }
}
const display = {
    template: "#slider-display",
    props : {
        work: Object
    }
}
const btns = {
    template: "#slider-btns",
    props: {
        works: Array,
        index: Number
    },
    data() {
        return {
            prevButtonWorks: [],
            nextButtonWorks: []
        };
    },
    created() {
        this.prevButtonWorks = this.transformWorksForButton('prev');
        this.nextButtonWorks = this.transformWorksForButton('next');
    },
    methods: {
        slide(direction) {
            this.$emit('slide', direction);
        },
        transformWorksForButton(buttonDirection) {
            const worksArray = [...this.works];
            const lastItem = worksArray[worksArray.length - 1];
            switch(buttonDirection) {
                case 'prev':
                    worksArray.unshift(lastItem);
                    worksArray.pop();
                    break;
                case 'next':
                    worksArray.push(worksArray[0]);
                    worksArray.shift();
                    break;
            }
            return worksArray;
        }
    }
}

new Vue({
    el: "#slider-component",
    components: {
        info, display, btns
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    
    computed: {
        currentWork() {
            return this.works[this.currentIndex]
        }
    },
    watch: {
        currentIndex(value) {
            const worksNumCountedFromZero = this.works.length - 1;
            if (value > worksNumCountedFromZero) this.currentIndex = 0
            if (value < 0) this.currentIndex = worksNumCountedFromZero;
        }
    },
    created() {
        const data = require("../../../data/works.json");
        this.works = data;
    },
    methods: {
        handleSlide(direction) {
            switch(direction) {
                case 'prev':
                    this.currentIndex = this.currentIndex - 1
                    break;
                case "next":
                    this.currentIndex = this.currentIndex + 1
                    break;
            }
        }
    },
    
    template: "#slider-root"
})
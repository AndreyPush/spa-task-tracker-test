<template lang="pug">
    form(:class="$style.addTask" @submit.prevent="handleSend")
        label(:class="$style.addTaskInputWrapper")
            p(:class="$style.addTaskInputTitle") Title
            input(:class="$style.addTaskInput" name="title" placeholder="Type title text" v-model="form.fields.title")
            p(:class="$style.addTaskError" v-if="form.errors.title.length>0") {{form.errors.title}}
        label(:class="$style.addTaskInputWrapper")
            p(:class="$style.addTaskInputTitle") Desciption
            textarea(:class="$style.addTaskTextarea" name="description" placeholder="Type description text" v-model="form.fields.description")
            p(:class="$style.addTaskError" v-if="form.errors.description.length>0") {{form.errors.description}}
        button(:class="$style.addTaskSubmit") Save Task
</template>

<script>
    const validateForm = form=>{
        let valid = false;

        Object.keys(form.fields).map(field=>{

            if(form.fields[field].length<2){
                form.errors[field] = 'That field should have minimum 2 chars';
                valid = false;
            }
            else {
                form.errors[field] = '';
                valid = true;
            }

        })

        return valid;
    };

    const getCurrentDateTime = ()=>{

        const validBelowOfTenVal = v=> v<10?`0${v}`:v;

        const d = new Date();
        const YYYY = d.getFullYear();
        const MM = validBelowOfTenVal(d.getMonth()+1);
        const DD = validBelowOfTenVal(d.getDate());
        const HH = validBelowOfTenVal(d.getHours());
        const mm = validBelowOfTenVal(d.getMinutes());

        return `${YYYY}-${MM}-${DD} ${HH}:${mm}`;
    }

    export default {
        data: ()=>({
            form: {
                fields: {
                    title: '',
                    description: ''
                },
                errors: {
                    title: '',
                    description: ''
                }
            },
        }),
        methods: {
            handleSend(){
                const vm = this;

                if(validateForm(vm.form)) {
                    const obj = {
                        title: vm.form.fields.title,
                        description: vm.form.fields.description,
                        status: 1,
                        created_date: getCurrentDateTime()
                    }

                    vm.axios.post(`${vm.baseURL}/tasks`, obj).then(r=>{
                        if(r.statusText==="Created") vm.$router.push('/')
                    });
                }
            }
        }
    }
</script>
<style lang="scss" module src="./addTask.module.scss"></style>

import axios from 'axios'
import { ElMessage } from 'element-plus'

let serve = axios.create({
    baseUrl:"localhost:3000",
    timeout:8000
})

serve.interceptors.request.use((req)=>{
    if(localStorage.getItem("token")){
        req.headers.Authorization = "Bear" + localStorage.getItem("token")
    }else{
        ElMessage.error('request error');
    }
},(err)=>{
    console.log(err);
})

serve.interceptors.response.use(res=>{
    return res.data
},err=>
{
    console.log(err);
    ElMessage.error('response error');
})

export default serve

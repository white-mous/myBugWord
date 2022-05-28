<template>
    <div class="BGC container">
        <div class="row">        
            <div class="col-12">
                    <el-divider></el-divider>
                    <el-steps :active="2" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="購物車" ></el-step>
                    <el-step title="填寫資料" ></el-step>
                    <el-step title="訂單確認" ></el-step>
                    </el-steps>
                    <el-divider></el-divider>
            </div>
            <div class="customer-form col-5  mx-auto" >
                    <h5>顧客資料</h5>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="顧客名稱" prop="customerName">
                        <el-input type="text" v-model="ruleForm.customerName" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="電子信箱" prop="email">
                        <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="電話號碼" prop="customerPhone">
                        <el-input type="text" v-model="ruleForm.customerPhone"></el-input>
                    </el-form-item>
                    </el-form>
            </div>
            <div class="customer-form col-5 mx-auto" >
 
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
                            <h5>送貨資料</h5>
                        <el-input
                            placeholder="送貨方式: 宅配(貨到付款)"
                            :disabled="true"
                            class="disinput">
                            
                        </el-input>
                        
                        <el-form-item label="地址" prop="adress" :disabled="true">
                            <el-input type="text" v-model="ruleForm.adress" autocomplete="off"></el-input>
                        </el-form-item>

                    </el-form>
            </div>
            <div class="col-10 message-form mt-5 mx-auto">
                        <!-- <el-form label-width="100px" >   -->
                            <h5>訂單備註</h5>             
                            <el-input
                                type="textarea"
                                placeholder="請輸入內容"
                                v-model="textarea"
                                maxlength="200"
                                show-word-limit
                                :rows="4"
                                >
                            </el-input>
                        <!-- </el-form>  -->
                        
            </div>
            <el-divider></el-divider>
             
             <div class="row footerContent">
                <div class="col-4">
                    <button class="backToCar bt my-auto ms-4" @click="goCar">返回購物車</button>
                </div>
                <div class="col-8">
                      <button class="submitBtn my-auto ms-5" @click="gotoOder(ruleForm.customerName,ruleForm.email,ruleForm.customerPhone,ruleForm.adress,oderFinish)">提交訂單</button>
                </div>
              </div>
              
        </div>
        <el-divider></el-divider>
    </div>
    
</template>

<script>
  export default {
    data() {
      let checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('電話號碼不能為空'));
        }
      };
      let valiadress = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('請輸入地址'));
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('請輸入名稱'));
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('請輸入信箱'));
        } 
      };
      return {
        textarea:'',
        oderFinish:false,
        ruleForm: {
          customerName: '',
          email: '',
          customerPhone: '',
          adress:'',
          
        },
        rules: {
          customerName: [
            { validator: validatePass, trigger: 'blur' }
          ],
          email: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          adress: [
            { validator: valiadress, trigger: 'blur' }
          ],
          customerPhone: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      gotoOder(customerName,email,customerPhone,adress,oderFinish){
            if(this.ruleForm.customerName=='' || this.ruleForm.email=='' || this.ruleForm.customerPhone=='' || this.ruleForm.adress=='' ){
                    this.$alert('資料填寫不完整，請填寫完畢。', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                        type: 'info',
                        message: `已取消動作`
                            })
                        }
                    })
            }else{
              oderFinish = true
              let oderCode = Math.floor(Math.random()*5000) 
              const d = new Date()
              const date = (d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate())
              this.$store.commit("SAVEODER",{customerName,email,customerPhone,adress,oderCode,date,oderFinish})
              this.$router.push({path:'/odercheck'})
            }
      },
      goCar(){
        this.$router.push({path:"/shoppingcart"})
      }
    },

  }
</script>
<style scoped >
   
  .customer-form{
      background-color: #fff;
      border: 1px solid rgb(230, 229, 229);
  }
  h5{
      padding: 15px 0;
  }
  .disinput{
      width: 325px;
      padding-bottom: 20px;
  }
  .message-form{
      background-color: #fff;
      border: 1px solid rgb(230, 229, 229);
      height: 200px;
      margin-bottom: 50px;
  }
  .backToCar{
      width: 150px;
      height: 50px;
      background-color: rgb(159, 211, 245);
      border: 1px solid rgb(69, 170, 238);
      border-radius: 10px;
  }
  .backToCar:hover{
      color:#fff;
      background-color: rgb(57, 166, 240);
  }
  .submitBtn{
      width: 500px;
      height: 50px;
      background-color: rgb(190, 248, 202);
      border: 1px solid rgb(177, 240, 173);
      border-radius: 10px;
  }
  .submitBtn:hover {
      color:#fff;
      background-color: rgb(112, 180, 56);
  }
@media screen and (max-width:767px) {
  .customer-form{
    width: 90%;
    margin-top: 50px;
  }
  .disinput{
    width: 100%;
  }
  .footerContent .bt{
    width: 100px;
  }
  .footerContent .submitBtn{
    width: 70%;

  }
}

    @media screen and (max-width:992px) {

    .disinput{
      width: 100%;
    }
   .customer-form{
    width: 90%;
    margin-top: 50px;
  }
  .footerContent .bt{
    width: 100px;
  }
  .footerContent .submitBtn{
    width: 70%;

  }
  }
</style>
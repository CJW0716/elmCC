<template>
	<div class="root" :class="{'collapse':isClose}">
		<div class="is-love" v-show="loveShow" @click="loveShow=!loveShow">
			<span>不喜欢</span>
		</div>
		<router-link :to="'/home/goodsdetail/'+rest.id">
        <div class="left-box">
            <div class="is-new" v-show="rest.is_new">
                <span>新店</span>
            </div>
            <img 
                class="icon" 
				:src="rest.image_path|iconFilter3"
            >
        </div>
        </router-link>
		<div class="right-box">
            <h3 class="first">
                <div class="rest-title">
                    <div class="brand" v-show="rest.is_premium">品牌</div>
                    <div class="rest-name">{{rest.name}}</div>
                </div>
                
                <span class="close" @click="loveShow=!loveShow">...</span>
            </h3>
            <div class="second">
				<div class="star">
					<Star 
						:num="rest.rating"
						:size="3"
					>
					</Star>
				</div>
                <div class="second-2">
                    
                    <span>{{rest.rating}}</span>
                    <span>月售{{rest.recent_order_num}}单</span>
                </div>
                <span class="fengniao" v-show="rest.delivery_mode">蜂鸟专送</span>
            </div>
            <div class="third">
                <div class="third-a">
                    <span>￥{{rest.float_minimum_order_amount}}起送</span>
                    |
                    <span>{{peis}}</span>
                </div>
                <div class="third-b">
                    <span class="font-color999">{{rest.distance|iconFilter4}}</span>
                    |
                    <span class="font-color999">{{rest.order_lead_time}}分钟</span>
                </div>
            </div>

            <!-- 第4行 -->
            <div class="fourth">
                <span 
                    v-for="t in rest.support_tags"
                    class="tag0"
					:style="{color:'#'+t.color,border:'solid 1px #'+t.border}"
                >
                    {{t.text}}
                </span>
                
                
            </div>
            <!-- 分割线 -->
            <div class="hr"></div>

            <!-- 活动列表 -->
            <div class="activity-list">
                <div 
					v-for="ac in rest.activities"
                    class="activity-item"
                >
                    <span 
                        class="ac-bg"
                        :style="{'background-color':'#'+ac.icon_color}"
                    >{{ac.icon_name}}</span>
                    <span class="ac-des">{{ac.description}}</span>
                </div>
				
                <div class="ac-btn" @click="isOpen">
                    {{rest.activities.length}}个活动
                    <span>▼</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import Star from "@/components/Star.vue"

export default {
	components:{
		Star
	}
	,
	props:['rest']
	,
	data(){
		return {
			isClose:true,
			loveShow:false
		}
	},
	methods:{
		isOpen(){
			// 取反
			this.isClose = !this.isClose
		}
	},
	computed:{
		peis(){
			if (this.rest.piecewise_agent_fee.no_subsidy_fee){
				
				return "远距离配送费"+this.rest.piecewise_agent_fee.no_subsidy_fee
			}else{
				return this.rest.piecewise_agent_fee.description
			}
		}
	}
}

</script>

<style scoped>
	.star{
		position: relative;
		top: -4vw;
		width: 30%;
	}
	.is-love{
		width: 100%;
		height: 100%;
		text-align: center;
		background-color: lightgray;
		opacity: 0.7;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.is-love span{
		display: block;
		width: 30vw;
		height: 30vw;
		border-radius: 50%;
		line-height: 30vw;
		background: white;
		color: blueviolet;
	}
	.collapse{
        height: 43vw;
    }
	.root{
        display: flex;
		flex-direction: row;
        /* height: 43vw; */
        padding: 4vw 0;
        /* border: solid 1px red; */
        width: 100vw;
        box-sizing: border-box;
        border-bottom: solid 1px #ddd;
        overflow: hidden;
		position: relative;
    }

    .left-box{
		
        width: 24vw;
        /* border: solid 1px black; */
        padding: 0 2vw;
        position: relative;
    }

    .icon{
        width: 100%;
        border: solid 1px #eeeeee;
    }

    .right-box{
        width: 76vw;
        /* border: solid 1px blue; */
        padding-right: 2vw;
    }

    .first{
        width: 100vw;
        margin: 0;
        display: flex;
        /* justify-content: space-between; */
    }
    .rest-title{
        display: flex;
        width:65%;
    }

    .brand{
        font-size: 3vw;
        background: linear-gradient(-139deg,#fff100,#ffe339);
        color:#6f3f15;
        padding: 0.5vw 1vw;
        margin-right: 1vw;
        vertical-align: middle;
        border-radius: 0.3vw;
        
    }

    .rest-name{
        font-size: 4vw;
        vertical-align: middle;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .close{
        font-weight: normal;
        font-size: 4vw;
        color: #666;
        width: 20%;
    }
    .second{
        margin-top: 2vw;
        font-size: 3vw;
        color: #666;
        display: flex;
        justify-content: space-between;
    }
	.second-2{
		width: 50%;
		height: 100%;
	}
	.fengniao{
		width: 20%;
		height: 100%;
		margin-right:6vw ;
	}
	.second-2 span{
		margin-right: 5px;
	}
    .fengniao{
        color: white;
        background: linear-gradient(45deg,#0085ff,#0af);
        padding: 0 0.4vw;
        border-radius: 0.3vw;
        font-size: 2.6vw;
    }

    .third{
        display: flex;
        justify-content: space-between;
        font-size: 3vw;
        color: #ccc;
        margin-top: 2.5vw;
    }
	.third-a{
		width: 60%;
	}
	.third-b{
		width: 40%;
	}
    .third span{
        color: #666;
    }

    .fourth{
        margin-top: 2vw;
        font-size: 2.6vw;
    }

    .tag0{
        padding: 0.3vw 0.8vw;
		border: 1px solid;
    }

    .tag1{
        color: orange;
    }

    .hr{
        margin-top: 2vw;
        border-top: dotted 1px #e0e0e0;
    }

    .activity-list{
        font-size: 3vw;
        color: #666;
        /* background-color: aqua; */
        position: relative;
    }

    .activity-item{
        margin-top: 0.8vw;
		width: 85%;
    }

    .ac-bg{
        color: white;
        padding: 0.5vw;
        border-radius: 0.5vw;
        margin-right: 1vw;
        vertical-align: middle;
    }

    .ac-des{
        display: inline-block;
        width: 70%;
        /* background-color: aqua; */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
    }

    .ac-btn{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 3vw;
        color: #999;
		width:28%;
		line-height: 190%;
    }

    .is-new{
        /* background-color: transparent; */
        width: 10vw;
        height: 10vw;
        position: absolute;
        left: 1.9vw;
        top: -0.1vw;
        background: linear-gradient(135deg,#26ce61,#26ce61 50%,transparent 0);
    }

    .is-new span{
        display: inline-block;
        transform: rotate(-45deg);
        color: white;
        font-size: 2.6vw;
        font-weight: bold;
        position: relative;
        left: 0.4vw;
        top: 0.4vw;
    }
</style>

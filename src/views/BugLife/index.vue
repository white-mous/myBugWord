<template>
    <div class="block">
        <!-- style="background-color: #cbf1fd;" -->
    <el-timeline >
        <!-- 卵 -->
        <el-timeline-item timestamp="卵" placement="top">
        <el-card style="">
            <h4>甲蟲的卵，是甲蟲生命的開始…</h4>
            <p>當公母交配後，將母蟲放入牠們喜歡的產房之後，母蟲便會開始在接近底部之處開始產卵；若產房是透明的，拿起產房有機會可以在底部及底部側邊看到卵或幼蟲。</p>
            <img src="./images/egg.jpg" alt="卵">
        </el-card>
        </el-timeline-item>
        <!-- 幼蟲 -->
        <el-timeline-item timestamp="幼蟲" placement="top">
        <el-card>
            <h4>幼蟲期是個重要的過程與關鍵</h4>
            <p>幼蟲成長過程會蛻三次皮，每次增加一齡。隨著蟲齡的增加，幼蟲所需求的食物與空間都會增加。所以幼蟲時期的飼養環境及食材，才是影響牠們羽化為成蟲時個體大小的重要因素。</p>
            <img src="./images/larva.jpg" alt="幼蟲">
        </el-card>
        </el-timeline-item>
        <!-- 蛹 -->
        <el-timeline-item timestamp="蛹" placement="top">
        <el-card>
            <h4>甲蟲的蛹，漸漸具有成蟲的雛形</h4>
            <p>三齡幼蟲(終齡幼蟲)在化蛹前會先蠕動身體，壓緊周遭的土壤成為橢圓形的蛹室。根據其犄角的有無，即可辨其雌雄。</p>
            <img src="./images/pupa.jpg" alt="蛹">
        </el-card>
        </el-timeline-item>
        <!-- 成蟲 -->
        <el-timeline-item timestamp="成蟲" placement="top">
        <el-card>
            <h4>甲蟲的最終型態</h4>
            <p>雖然有著凶猛的外型，但所有的鍬形蟲都是完全素食者，一生以吸取樹木汁液、或水果為生。多數的鍬形蟲喜歡聚集在殼斗科植物，因為會分泌甜美的樹枝，在台灣中海拔是常見的樹種。</p>
            <img src="./images/adultWorm.jpg" alt="成蟲">
        </el-card>
        </el-timeline-item>
    </el-timeline>
    </div>
</template>

<script>
export default {
    name:"BugLife",
}
</script>

<style scoped>
    img{
        height: 400px;
        width: 600px;
    }
    .el-card{
        /* background-color: #edffe4; */
    }
    *{
        background-color: #edffe4;
    }
</style>
var baseUrl = "http://192.168.1.222:9001"  //线上环境接口地址
//var baseUrl = "http://175.24.116.174:6601"  //线上环境接口地址
//var baseUrl = "http://192.168.0.102:9001"
//var baseUrl = "http://192.168.1.64:9001"
var fileUrl = "/cockpit/import/importExcel"  //线上环境文件地址

//请求体内容类型
var contentType = "application/json; charset=UTF-8"
//市场经营
var shichangjingyin ={
	projectStatis:"/cockpit/market/projectStatis/getbysdate",//获取项目统计
	provinceInside:"/cockpit/market/provinceInside/getlistbysdate",//获取省内项目
	projectTypeStatis:"/cockpit/market/projectTypeStatis/getlistbysdate",//获取项目类型统计
	provinceExternal:"/cockpit/market/provinceExternal/getlistbysdate",//获取省外项目 
	subsidiaryBuisiness:"/cockpit/market/subsidiaryBuisiness/getlistbysdate",//获取分公司经营统计
	yearTarget:"/cockpit/market/yearTarget/getlistbysdate",//获取年度目标趋势 
	yearOperate:"/cockpit/market/yearOperate/getbysdate",//获取年度经营指标
}

//投融资管理
var tourongziguanli = {
	contractSign:"/cockpit/financing/contractSign/getbysdate",//合同签订
	projectExternal:"/cockpit/financing/projectExternal/getbysdate",//项目省外项目
	projectInside:"/cockpit/financing/projectInside/getbysdate",//项目省内项目
	projectStatisHeader:"/cockpit/financing/projectStatisHeader/getbysdate",//项目统计头部 
	spvCompany:"/cockpit/financing/spvCompany/getbysdate",//SPV公司
	spvCompanyStatis:"/cockpit/financing/spvCompanyStatis/getbysdate",//SPV公司统计
}

//财务管理

var caiwuguanli ={
	financeStatisHeader:"/cockpit/finance/financeStatisHeader/getbysdate",//财务统计头部
	financeRanking:"/cockpit/finance/financeRanking/getbysdate"//财务排行榜
}

//工程管理
var gongchengguanli={
	projectMinute:"/cockpit/projectManage/projectMinute/getbysdate",//工程分布
	prizeStatis:"/cockpit/projectManage/prizeStatis/getbysdate",//奖统计
	constructionOutput:"/cockpit/projectManage/constructionOutput/getbysdate",//施工产值
	constructionOutputData:"/cockpit/projectManage/constructionOutputData/getbysdate",//施工产值数据
	qualityAssessmentProjectData:"/cockpit/projectManage/qualityAssessmentProjectData/getbysdate",//质量考评项目列表数据
	qualityAssessmentProject:"/cockpit/projectManage/qualityAssessmentProject/getbysdate",//质量考评项目
	qualityOutput:"/cockpit/projectManage/qualityOutput/getbysdate",//质量产值
	qualityOutputRanking:"/cockpit/projectManage/qualityOutputRanking/getbysdate",//质量产值排行榜	
}

//科技管理
var kejiguanli={
	technoSubject:"/cockpit/techno/technoSubject/getbysdate",//科技课题
	technoAchievement:"/cockpit/techno/technoAchievement/getbysdate",//科技成果 
	technoBim:"/cockpit/techno/technoBim/getbysdate",//科技bim实施概况
	technoBimData:"/cockpit/techno/technoBimData/getbysdate",//科技bim实施概况数据
	technoCarbon:"/cockpit/techno/technoCarbon/getbysdate",//科技碳排
	technoDemonstra:"/cockpit/techno/technoDemonstra/getbysdate",//科技示范工程
	technoRubbish:"/cockpit/techno/technoRubbish/getbysdate",//科技垃圾
}

//成本控制
var chengbenkongzhi = {
	costYearTrade:"/cockpit/cost/costYearTrade/getbysdate",//当年交易金额 
	costBranchLiquidate:"/cockpit/cost/costBranchLiquidate/getbysdate",//分公司清结算累计
	costLiquidate:"/cockpit/cost/costLiquidate/getbysdate",//清结算累计趋势
	costMaterial:"/cockpit/cost/costMaterial/getbysdate",//材料价格趋势
	costPurchase:"/cockpit/cost/costPurchase/getbysdate",//采购趋势
	costQualifiedSupplier:"/cockpit/cost/costQualifiedSupplier/getbysdate",//合格供方
	costSupplierRanking:"/cockpit/cost/costSupplierRanking/getbysdate",//供应商交易排名 
	costTradeData:"/cockpit/cost/costTradeData/getbysdate",//累积交易趋势 
	
}

//人力资源
var renliziyuan = {
	personAge:"/cockpit/person/personAge/getbysdate",//按年龄性别分布
	personDuty:"/cockpit/person/personDuty/getbysdate",//按组织层次分布 
	personEducation:"/cockpit/person/personEducation/getbysdate",//按学历分布
	personJobTitle:"/cockpit/person/personJobTitle/getbysdate",//按职称分布 
	personProfessionCertificate:"/cockpit/person/personProfessionCertificate/getbysdate",//职业证书
	personJob:"/cockpit/person/personJob/getbysdate",//在职情况
}
//驾驶舱主页
var zhuye ={
	getlisttargettotalamountbysdate:"/cockpit/market/subsidiaryBuisiness/getlisttargettotalamountbysdate",//获取分公司目标 
	getlisttotalamountbysdate:"/cockpit/market/subsidiaryBuisiness/getlisttotalamountbysdate",//获取分公司营收收入对比
	dutyPersonnel:"/cockpit/hr/dutyPersonnel/getlistbysdatee",//在岗人员按组织层级分布
	winningProject:"/cockpit/financing/winningProject/getlistbysdate",//中标项目分析
}

//shouye
var shouye = {
	transactionAmount:"/cockpit/index/transactionAmount/getbysdate",//交易金额
	economicsInfo:"/cockpit/index/economicsInfo/getbysdate",//经济情况
	projectInfo:"/cockpit/index/projectInfo/getbysdate",//项目情况
	projectBidInfo:"/cockpit/index/projectBidInfo/getbysdate",//中标项目
	indexCenterData:"/cockpit/index/indexCenterData/getbysdate",//中间指标
	qualifiedSupplier:"/cockpit/index/qualifiedSupplier/getbysdate",//合格供方
	yearOperate:"/cockpit/market/yearOperate/getList"//年度经营目标
}
var param = {
	sdate:2022
}


/**
 * 限定输入的数字必须是大于0小于100
 */
function blurNumber(obj){
	var dataId = obj.getAttribute("data-id")
	var value = $.trim(obj.value)
	if(obj.value){
		if(obj.value > 100 || obj.value < 0){
			$("#indicatorValue"+dataId).val(88);
		}
	}else{
		$("#indicatorValue"+dataId).val(1);
	}
}


/*
 * 获取当前日期时间
 */
function getNowDateTime(){
	var myDate = new Date();
	myDate.getYear();        //获取当前年份(2位)
	var y = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
	var m = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
	var d = myDate.getDate();        //获取当前日(1-31)
	var h = myDate.getHours();       //获取当前小时数(0-23)
	return y + '/' + timeHandle(m) + '/' + timeHandle(d) + ' ' + timeHandle(h) + '时'
}

function timeHandle(numberFormat){
	if(numberFormat){
		numberFormat = numberFormat<10 ? '0'+numberFormat : numberFormat
	}
	//numberFormat = numberFormat == 0 ? '00' : numberFormat
	return numberFormat
}

/* 
 * 根据 yyyyMMddhhmmss 转换为时间格式
 */
function datetimeFormat(datetime){
	var dt = ''
	if(datetime){
		dt += datetime.substring(0, 4) + '-'
		dt += datetime.substring(4, 6) + '-'
		dt += datetime.substring(6, 8) + '-'
		dt += ' ' + datetime.substring(8, 10) + ':'
		dt += datetime.substring(10, 12) + ':'
		dt += datetime.substring(12, 14)
	}
	return dt
}

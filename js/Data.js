// JavaScript Document
define({ //dedine闭包
	xqQS: {//学期下拉数据
		values: [
			["2015-2016学年上学期"]
		],
		valuesActive: [1] //默认选择第几个
	},
	se:[['2017-9-5','2017-10-8']],//每个学期的开始日期和结束日期
	
	sjData: [{//事项数据结构（所有学期的事项）
			id: "1",
			startTime: "2017-9-22",
			endTime: "2017-10-3",
			cont: "年度教师总结大会筹备",
			type: "教师活动",
			isTx: false,
			txType: "无",
			joinMan: "全校教师"
		},
		{
			id: "2",
			startTime: "2017-9-12",
			endTime: "2017-10-2",
			cont: "年度教师总结大会筹备333",
			type: "教师活动",
			isTx: false,
			txType: "无",
			joinMan: "全校教师"
		},
		{
			id: "3",
			startTime: "2017-12-13",
			endTime: "2017-12-15",
			cont: "年度教师总结大会筹备2",
			type: "教师活动",
			isTx: false,
			txType: "无",
			joinMan: "全校教师"
		}
	]

});
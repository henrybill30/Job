//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    //swipr的参数
    indicatorDots: true,
    autoplay: true,
    interval: 2500,  //播放速率
    duration: 1000,
    circular: true,

    //从json文件中获取的信息
    //获取推荐商镜recommend
    count1: 3,
    bizinfo: [
      {
        id: "deltax",
        level: 1,
        show_type: "banner",
        ch_name: "融盛资本",
        en_name: "DeltaX Capital Limited",
        ch_shot_info: "DeltaX Capital是一家企业孵化器和风险投资公司，专注于帮助企业家建立可持续发展的业务，在深圳设有研发原型中心，在全球多个地点设有战略合作伙伴。",
        en_shot_info: "DeltaX Capital is a business incubator and venture capital rm, focusing on helping entrepreneurs build sustainable business, with a R&D prototyping center in ShenZhen and strategic partners in multiple locations worldwide.",
        views: 18244,
        likes: 5,
        big_image: "/images/recommend/banner_deltax.png"
      },
      {
        id: "deltax",
        level: 1,
        show_type: "banner",
        ch_name: "融盛资本",
        en_name: "DeltaX Capital Limited",
        ch_shot_info: "DeltaX Capital是一家企业孵化器和风险投资公司，专注于帮助企业家建立可持续发展的业务，在深圳设有研发原型中心，在全球多个地点设有战略合作伙伴。",
        en_shot_info: "DeltaX Capital is a business incubator and venture capital rm, focusing on helping entrepreneurs build sustainable business, with a R&D prototyping center in ShenZhen and strategic partners in multiple locations worldwide.",
        views: 18244,
        likes: 5,
        big_image: "/images/recommend/banner_deltax.png"
      },
      {
        id: "vt",
        level: 2,
        show_type: "banner",
        ch_name: "北京维盛泰科科技有限公司",
        en_name: "Vision Technology",
        ch_shot_info: "2011年成立，专注于AR/VR和AI相关算法研究以及解决方案。",
        en_shot_info: "Founded in 2011, focuses on AR/VR and AI related technology and business solutions .",
        views: 733,
        likes: 1,
        big_image: "/images/recommend/banner.png"
      },
      {
        id: "bupt",
        level: 3,
        show_type: "banner",
        ch_name: "北京邮电大学",
        en_name: "Beijing University of Posts and Telecommunications",
        ch_shot_info: "北京邮电大学是教育部直属、工业和信息化部共建、首批进行“211工程”建设的全国重点大学，是“985优势学科创新平台”项目重点建设高校，是一所以信息科技为特色、工学门类为主体、工管文理协调发展的多科性、研究型大学，是我国信息科技人才的重要培养基地",
        en_shot_info: "Beijing University of Posts and Telecommunications (BUPT), founded in 1955, is a university directly under the administration of the Ministry of Education (MoE) and co-built by the Ministry of Industry and Information Technology(MIIT). BUPT is one of the first “Project 211” universities. BUPT has also joined the “Project 985 Innovation Platform for Superior Discipline”.",
        views: 589,
        likes: 3,
        big_image: "/images/recommend/banner (1).png"
      }
    ],

    //获取所有分类的自身内容allclasses
    count2: 5,
    content: [
      {
        id: 1,
        biz_type: "c",
        ch_name: "企业",
        en_name: "Enterprise",
        ch_image: "/images/classes/c_ch.png",
        en_image: "http://www.bizspace.cn:8690/appsrc/pattern/classes/c_en.png",
        show_type: "classes"
      },
      {
        id: 2,
        biz_type: "a",
        ch_name: "工作室",
        en_name: "Studio",
        ch_image: "/images/classes/a_ch.png",
        en_image: "http://www.bizspace.cn:8690/appsrc/pattern/classes/a_en.png",
        show_type: "classes"
      },
      {
        id: 3,
        biz_type: "s",
        ch_name: "校园",
        en_name: "Campus",
        ch_image: "/images/classes/s_ch.png",
        en_image: "http://www.bizspace.cn:8690/appsrc/pattern/classes/s_en.png",
        show_type: "classes"
      },
      {
        id: 4,
        biz_type: "m",
        ch_name: "博物馆",
        en_name: "Museum",
        ch_image: "/images/classes/m_ch.png",
        en_image: "http://www.bizspace.cn:8690/appsrc/pattern/classes/m_en.png",
        show_type: "classes"
      },
      {
        id: 5,
        biz_type: "e",
        ch_name: "展会",
        en_name: "Exhibition",
        ch_image: "/images/classes/e_ch.png",
        en_image: "http://www.bizspace.cn:8690/appsrc/pattern/classes/e_en.png",
        show_type: "classes"
      }
    ],

    //
    count3: 5,
    info: [
      {
        show_type: "adv_url",
        ch_title: "欢迎进入VR世界",
        en_title: "Welcome to VR world！",
        biz: "",
        url: "http://www.bizspace.cn:8690/appsrc/advertise/vrexp/scinews.html",
        image: "/images/advertise/adv_bizspace.png",
        views: 0,
        likes: 0
      },
      {
        show_type: "adv_biz",
        ch_title: "融盛资本",
        en_title: "DeltaX Capital Limited",
        biz: "deltax",
        url: "",
        image: "/images/advertise/adv_deltax.png",
        views: 18257,
        likes: 6
      },
      {
        show_type: "adv_biz",
        ch_title: "北京维盛泰科科技有限公司",
        en_title: "Vision Technology",
        biz: "vt",
        url: "",
        image: "/images/advertise/adv_vt.png",
        views: 734,
        likes: 1
      },
      {
        show_type: "adv_biz",
        ch_title: "北京邮电大学",
        en_title: "Beijing University of Posts and Telecommunications",
        biz: "bupt",
        url: "",
        image: "/images/advertise/adv.png",
        views: 591,
        likes: 3
      },
      {
        show_type: "adv_biz",
        ch_title: "北邮模式识别实验室",
        en_title: "Pattern Recognition Lab of BUPT",
        biz: "pris",
        url: "",
        image: "/images/advertise/adv (1).png",
        views: 279,
        likes: 2
      }
    ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

module.exports = {


    //The P/E ratio is calculated by dividing the market value price per share by the company's earnings per share.
    // Price per share / EPS
    sPE: function (pricePerShare, EPS) {
        let pe;
        pricePerShare || EPS != null || "" ?
            pe = pricePerShare / EPS : pe = "check your input !!!"
        //many value investors would refer to 20 to 25 as the average P/E ratio range
        //通常是用來判斷一家公司股票價格昂貴還是便宜的一種指標，計算的方式簡單，以「股價」除以「每股盈餘（EPS）」所得到的數值就是本益比。 
        //以投資的角度來看，本益比可以用來當作投資某家公司後「多久可以回本」？

        //买股票PE 低好 越低越便宜
        pe = "现在的EPS是：" + EPS + "现在的股价是EPS的" + pe + "倍"
        return pe;

    },

    sROE: function (netProfit, equity) {
        //衡量相对于股东权益的投资回报之指标，反映公司利用资产净值产生纯利的能力，是衡量企业获利能力的重要指标。
        // net Profit / capital or equity (是所有資產減去所有負債後得到數字） *100%
        //越高越好
        //小小的钱，赚大大的钱啊
        let ROE
        netProfit || equity != null || "" ?
            ROE = netProfit / equity * 100 : ROE = "Check your input!!!! "
        ROE = `ROE 是 ${ROE} 越高越好 表示小小的钱，赚大大的钱啊，如果太高请注意！！！`
        return ROE;
    },

    priceAndNTA: function (sharePrice, Nta) {
        //衡量股价跟NTA差多少钱

        let sn;
        sharePrice || Nta != null || "" ?
            sharePrice > Nta ? sn = `share Price 大过Nta 大了${sharePrice - Nta} ，代表Share Price 贵过Nta` : `share Price 小过 Nta 小了${Nta - sharePrice} ，代表Share Price 便宜`
            : sn = `check your input !!`

    },

    sDY: function (DPS, sharePrice) {
        // Dividend Yield = Cash Dividend per share / Market Price per share * 100
        let DY;
        DPS || sharePrice != null || "" ?
            DY = DPS / sharePrice * 100 :
            DY = `check youu input `

    },

    sD: function (DPS, EPS) {
        //股息支付率計算方式為：每股股息 / 每股盈餘（EPS）
        //評估公司持續分配股息的能力
        let comemnt=` 派發高股息	優點	缺點
        公司角度	– 回饋股東	– 資金減少
        – 失去擴展業務的機會

        投資者角度	– 提升收入
        – 可進行股息再投資計劃	– 忽略公司基本面

        – 賺了股息，虧了差價
        延伸閱讀：小心賺了股息卻賠了本金！你該知道的3個常見高股息陷阱
        `
        let d;
        DPS || EPS != null || "" ?
            d = DPS / EPS :
            d = `check your input !!`

    }




}
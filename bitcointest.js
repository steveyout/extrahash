const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
var randomItem = require('random-item');
const Markup = require('telegraf/markup');
const bot = new Telegraf("727106365:AAHRaDAUD9yL-gIb8o8PheJGDsPoqb5TAMs");
const Scene = require('telegraf/scenes/base');
const session = require('telegraf/session');
const Stage = require('telegraf/stage')
var randomDecimal = require('random-decimal');
const { enter,leave } = Stage
var btc='d63b2e5d-4e54-5990-943f-ef5788433df1'
var rates = require("bitcoin-exchange-rates");
var cron = require('node-cron');
var mysql = require('mysql');
var WAValidator = require('wallet-address-validator');
var coinbase = require('coinbase');
var Coinbase = require('coinbase');
var Client = require('coinbase').Client;
var mysecret = '8eDpUW9PJ7E16xlns9msu5vUNxth9G0A'
var mykey = 'JaH2VY37PArRPeod'

var client = new Client({'apiKey': mykey, 'apiSecret': mysecret});
var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "D8s27ZhjRf",
    password: "WMn4et3Zf4",
    database:"D8s27ZhjRf"
});
var rn = require('random-number');
var options = {
    min:  0.000001
    , max:  0.0001
}
//server

const {createServer} = require('http')
const server = createServer(() => {})
server.listen(3000)
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//catch error
bot.catch((err) => {
    console.log('Ooops', err)
})



//menu refferal start

bot.use(Telegraf.log());





//start
bot.command('start',ctx => {
    var message = ctx.message;
    var id = ctx.from.id;
    var start = '/start';
    con.query("SELECT id FROM account WHERE id=" + id, function (err, result, fields) {
        console.log(result.length)
        if (message.text == start&&result.length===0) {
            var chatid = ctx.from.id;
            var firstname = 'steve'
            var bal = 0;
            var tim = new Date();
            var address = 'none';
            var refa = 411002680;
            var user = {id: chatid, balance: bal, firstname: firstname, time: tim, withdrawadd: address, ref: refa};
            con.query("insert into `account` SET ?", user, function (error, results) {
                console.log(error)
                ctx.replyWithHTML('<pre>Welcome </pre><b>'+ctx.from.first_name+"("+ctx.from.id+") </b> To Extrahash.\n\nsᴛᴀʀᴛ ᴅᴀᴛᴇ:<b>10/08/2019</b>\n\nᴀᴅᴍɪɴ:@Extrahashsupport\n\n💭ɢʀᴏᴜᴘ:@extrahashchat\n\n💼ᴘᴀʏᴏᴜᴛs:@extrahashpayouts\n\nsᴛᴀʀᴛ ᴍɪɴɪɴɢ ᴡɪᴛʜ ᴛʜᴇ ʙᴇsᴛ ᴄʟᴏᴜᴅᴍɪɴɪɴɢ ʙᴏᴛ ᴘʀᴏᴠɪᴅɪɴɢ ʏᴏᴜ ᴡɪᴛʜ ᴛʜᴇ ʙᴇsᴛ ʜᴀsʜʀᴀᴛᴇ ᴀɴᴅ ɢᴜᴀʀᴀɴᴛᴇᴇ ᴏꜰ ᴘʀᴏꜰɪᴛs.ᴡᴇ ᴅᴏɴᴛ ᴏꜰꜰᴇʀ ᴍᴜᴄʜ ʙᴜᴛ ᴡᴇ ᴘʀᴏᴍɪsᴇ ꜰᴀsᴛ ᴀɴᴅ ɪɴsᴛᴀɴᴛ ᴘᴀʏᴏᴜᴛs sᴛʀᴀɪɢʜᴛ ᴛᴏ ʏᴏᴜʀ ᴡᴀʟʟᴇᴛ" , Markup
                    .keyboard([
                        ['⛽️🇲 🇪 🇳 🇺'] // Row1 with 2 buttons
                    ])

                    .resize()
                    .extra())
            })

        } else if (message.text.split(start)[1] == id) {
            ctx.reply('🚫You cannot refer yourself', Markup
                .keyboard([
                    ['⛽️🇲 🇪 🇳 🇺'] // Row1 with 2 buttons
                ])

                .resize()
                .extra())
        } else if (message.text.split(start)[1] !== id) {

            var chatd = ctx.from.id
            con.query("SELECT id FROM account WHERE id=" + chatd, function (err, result, fields) {
                console.log(result.length)
                if (result.length === 0) {

                    var chatidi = ctx.from.id;
                    var firstnamee = 'steve';
                    var bala = 0;
                    var time = new Date();
                    var addresse = 'none';
                    var refidi = message.text.split(start)[1]
                    var useri = {
                        id: chatidi,
                        balance: bala,
                        firstname: firstnamee,
                        time: time,
                        withdrawadd: addresse,
                        ref: refidi,
                    };
                    con.query("insert into `account` SET ?", useri)

                    var chatd = ctx.from.id
                    con.query("SELECT ref FROM account WHERE id=" + chatd, function (err, result, fields) {

                        if (result[0].ref !== refidi) {
                            var refbonus =10;
                            var ref = 1;
                            var refid = message.text.split(start)[1];
                            var sql = "update `account` set `hashpower` =`hashpower`+ '" + refbonus + "', friends =`friends`+ " + ref + " where `id` = '" + refid + "'";



                            con.query(sql)

                            ctx.replyWithHTML('<pre>Welcome </pre><b>'+ctx.from.first_name+"("+ctx.from.id+") </b> To Extrahash.\n\nsᴛᴀʀᴛ ᴅᴀᴛᴇ:<b>10/08/2019</b>\n\nᴀᴅᴍɪɴ:@Extrahashsupport\n\n💭ɢʀᴏᴜᴘ:@extrahashchat\n\n💼ᴘᴀʏᴏᴜᴛs:@extrahashpayouts\n\nsᴛᴀʀᴛ ᴍɪɴɪɴɢ ᴡɪᴛʜ ᴛʜᴇ ʙᴇsᴛ ᴄʟᴏᴜᴅᴍɪɴɪɴɢ ʙᴏᴛ ᴘʀᴏᴠɪᴅɪɴɢ ʏᴏᴜ ᴡɪᴛʜ ᴛʜᴇ ʙᴇsᴛ ʜᴀsʜʀᴀᴛᴇ ᴀɴᴅ ɢᴜᴀʀᴀɴᴛᴇᴇ ᴏꜰ ᴘʀᴏꜰɪᴛs.ᴡᴇ ᴅᴏɴᴛ ᴏꜰꜰᴇʀ ᴍᴜᴄʜ ʙᴜᴛ ᴡᴇ ᴘʀᴏᴍɪsᴇ ꜰᴀsᴛ ᴀɴᴅ ɪɴsᴛᴀɴᴛ ᴘᴀʏᴏᴜᴛs sᴛʀᴀɪɢʜᴛ ᴛᴏ ʏᴏᴜʀ ᴡᴀʟʟᴇᴛ" , Markup

                                .keyboard([
                                    ['⛽️🇲 🇪 🇳 🇺'] // Row1 with 2 buttons
                                ])


                                .resize()
                                .extra())
                            con.query("SELECT id FROM account WHERE id=" + refid, function (err, result, fields) {
                                ctx.telegram.sendMessage(result[0].id, 'you have a new refferal,you receive:<b>+ 10⚡️(0.000001 ฿ ᴘᴇʀ ᴅᴀʏ)</b>',Extra
                                    .HTML()
                                    )


                            })
                        }
                    })

                } else if (result.length > 0) {
                    var rd = ctx.from.id
                    con.query("SELECT ref FROM account WHERE id=" + rd, function (err, result, fields) {
                        if (result[0].ref == ctx.message.text.split(start)[1]) {
                            ctx.reply('🚫you have already used this link', Markup
                                .keyboard([
                                    ['⛽️🇲 🇪 🇳 🇺']  // Row1 with 2 buttons
                                ])

                                .resize()
                                .extra())
                        } else if (result[0].ref !== ctx.message.text.split(start)[1]) {
                            ctx.reply('???', Markup
                                .keyboard([
                                    ['⛽️🇲 🇪 🇳 🇺'] // Row1 with 2 buttons
                                ])

                                .resize()
                                .extra())
                        }
                    })
                }
            })
        }
    })
})
//menu
bot.hears('⛽️🇲 🇪 🇳 🇺',ctx => {
    ctx.replyWithHTML("ᗰᗩᏆᑎ ᗰᗴᑎᑌ",Markup
        .keyboard([
            ['🧳Balance','🤖Machines'],
            ['➕Add btc','➖Withdraw','👨‍👦Invite'],
            ['👁‍🗨Support','⚙️Settings','📊Stats']


        ])
        .resize()
        .extra()

    )



})
//Balance
bot.hears('🧳Balance',ctx => {
con.query("SELECT balance,time,withdrawadd,hashpower FROM account WHERE id="+ctx.from.id,function (err,res) {
    ctx.replyWithHTML("👤ᴜsᴇʀ: <b>"+ctx.from.first_name+" </b>\n\n🆔ɪᴅ: <b>"+ctx.from.id+" </b>\n\n💴ʙᴀʟᴀɴᴄᴇ: <b>"+res[0].balance+"  ฿ </b>\n\n⚡️ʜᴀsʜᴘᴏᴡᴇʀ: <b>"+res[0].hashpower+" ⚡️</b>\n\n💥ᴊᴏɪɴᴇᴅ: <i>"+res[0].time+" </i>",Markup
        .keyboard([
            ['➕Add btc','➖Withdraw'],
            ['🤖Machines','⛽️🇲 🇪 🇳 🇺']



            ])
        .resize()
        .extra()

    )

})

    ////////////transactions
    var user = ctx.from.id
    var sqli = "SELECT depoaddre,txid,ref,id from `account` where `id` = '" + user + "'";
    con.query(sqli, function (error, res, fields) {
        if (res[0].depoaddre!== null) {
            client.getAccount(btc, function (err, account) {
                account.getAddress(res[0].depoaddre, function (err, address) {
                    address.getTransactions({}, function (err, txs) {
                        if (txs.length === 0) {
                            console.log('no transactions today')
                        } else if (txs[0].id == res[0].txid) {
                            console.log('transaction already confirmed')
                        } else if (txs[0].id !== res[0].txid) {
                            var txid = txs[0].id
                            var balance = txs[0].amount.amount
                            var transactions = txs[0].amount.amount
                            var chatid = ctx.from.id
                            var sqli = "update `account` set `txid` = '" + txid + "', balance = `balance`+" + balance + ", transactions = `transactions`+" + transactions + " where `id` = '" + chatid + "'";
                            con.query(sqli, function (err, response) {
                                console.log(err)
                                var trans='https://www.blockchain.com/btc/address/'+res[0].depoaddre
                                var ref = res[0].ref
                                var refbonus = balance * 0.30
                                var sqla = "update `account` set `balance` = `balance`+" + refbonus + " where `id` = '" + ref + "'";
                                con.query(sqla)
                                ctx.telegram.sendMessage(res[0].id, 'we have received your deposit of ' + balance + '  BTC️ ')
                                ctx.telegram.sendMessage(ref, 'you refferal just deposited. ' + refbonus.toFixed(8) + 'BTC has been added to your  balance ')
                                ctx.telegram.sendMessage('@extrahashpayouts', '<b>💰 Deposit</b>  \n<b>📦 Investor:</b> ' + ctx.from.first_name + '\n<b>💶Amount:</b>'+balance+'\n \n  📉<a href="'+trans+'">view transaction</a>\n<b>🔴 Bot: @LegitMiningPro_Bot</b>',Extra
                                    .HTML())
                            })
                        }
                    })
                })
            })
        }
    })

})

////add btc
bot.hears('➕Add btc',ctx => {
    var user=ctx.from.id
    var sql = "SELECT `depoaddre` from `account` where `id` = '" + user + "'";
    con.query(sql, function(error, results, fields) {
        if (results[0].depoaddre == null) {
            client.getAccount(btc, function (err, account) {
                account.createAddress(null, function (err, address) {
                    console.log(err)
                    var adress = address.address
                    var ide = ctx.from.id

                    ctx.replyWithHTML("<b>Add Btc </b>\n\nᴀᴅᴅ ꜰᴜɴᴅs ᴛᴏ ʏᴏᴜʀ ᴀᴄᴄᴏᴜɴᴛ ᴛᴏ ᴘᴜʀᴄʜᴀsᴇ ʜᴀsʜᴘᴏᴡᴇʀ ᴍᴀᴄʜɪɴᴇs ᴀɴᴅ sᴛᴀʀᴛ ᴍɪɴɪɴɢ\nᴘʟᴇᴀsᴇ sᴇɴᴅ ᴛʜᴇ ᴀᴍᴏᴜɴᴛ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ɪɴᴠᴇsᴛ ᴛᴏ ᴛʜᴇ ʙᴇʟᴏᴡ ᴀᴅᴅʀᴇss\n\nᴍɪɴ ɪɴᴠᴇsᴛᴍᴇɴᴛ:<b>0.001 BTC</b>\n\n⚠️ᴀɴʏ ᴅᴇᴘᴏsɪᴛ ᴀᴍᴏᴜɴᴛ ʙᴇʟᴏᴡ ᴛʜᴇ ᴍɪɴɪᴍᴜᴍ ᴡɪʟʟ ʙᴇ ᴅɪsʀᴇɢᴀʀᴅᴇᴅ")
                        .then(() => {
                            ctx.replyWithHTML('<code>' + adress + '</code>', Markup
                                .keyboard([
                                    ['⛽️🇲 🇪 🇳 🇺']
                                ])

                                .resize()
                                .extra())
                            var sqli = "update `account` set `depoaddre` = '" + adress + "' where `id` = '" + ide + "'";
                            con.query(sqli, function (err, results) {
                                console.log(err)
                            })
                        })
                });
            });

        } else {
            var user = ctx.from.id
            var sqla = "SELECT `depoaddre` from `account` where `id` = '" + user + "'";
            con.query(sqla, function (error, results, fields) {
                ctx.replyWithHTML("<b>Add Btc </b>\n\nᴀᴅᴅ ꜰᴜɴᴅs ᴛᴏ ʏᴏᴜʀ ᴀᴄᴄᴏᴜɴᴛ ᴛᴏ ᴘᴜʀᴄʜᴀsᴇ ʜᴀsʜᴘᴏᴡᴇʀ ᴍᴀᴄʜɪɴᴇs ᴀɴᴅ sᴛᴀʀᴛ ᴍɪɴɪɴɢ\nᴘʟᴇᴀsᴇ sᴇɴᴅ ᴛʜᴇ ᴀᴍᴏᴜɴᴛ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ɪɴᴠᴇsᴛ ᴛᴏ ᴛʜᴇ ʙᴇʟᴏᴡ ᴀᴅᴅʀᴇss\n\nᴍɪɴ ɪɴᴠᴇsᴛᴍᴇɴᴛ:<b>0.001 BTC</b>\n\n⚠️ᴀɴʏ ᴅᴇᴘᴏsɪᴛ ᴀᴍᴏᴜɴᴛ ʙᴇʟᴏᴡ ᴛʜᴇ ᴍɪɴɪᴍᴜᴍ ᴡɪʟʟ ʙᴇ ᴅɪsʀᴇɢᴀʀᴅᴇᴅ")
                    .then(() => {
                        ctx.replyWithHTML('<code>' + results[0].depoaddre + '</code>', Markup
                            .keyboard([
                                ['⛽️🇲 🇪 🇳 🇺']
                            ])

                            .resize()
                            .extra())

                    })
            })
        }


    })
})
    /////invite friends
bot.hears("👨‍👦Invite",ctx => {
    con.query("SELECT friends,friendsbonus FROM account WHERE id="+ctx.from.id,function (err,res) {
        ctx.replyWithHTML("👨‍👦ɪɴᴠɪᴛᴇ ꜰʀɪᴇɴᴅs\n\nɪɴᴠɪᴛᴇ ꜰʀɪᴇɴᴅs ᴀɴᴅ ɢᴇᴛ  <b>10⚡</b>️ ᴍɪɴɪɴɢ ʜᴀsʜᴘᴏᴡᴇʀ ᴀɴᴅ <b>30%</b> ᴏꜰ ʏᴏᴜʀ ɪɴᴠɪᴛᴇ's ᴅᴇᴇᴘᴏsɪᴛ\n\n👨‍👦ɪɴᴠɪᴛᴇs: <b>"+res[0].friends+"</b>\n🎁ᴇᴀʀɴᴇᴅ: <b>"+res[0].friendsbonus+" ฿ </b>\n\nᴄʟɪᴄᴋ ʙᴇʟᴏᴡ ᴛᴏ ɢᴇᴛ ʏᴏᴜʀ ʀᴇꜰ ʟɪɴᴋ ᴀɴᴅ sᴛᴀʀᴛ ɪɴᴠɪᴛɪɴɢ ꜰʀɪᴇɴᴅs👇🏻",Extra
            .HTML()
            .markup((m)=>m.inlineKeyboard([
                m.callbackButton('⛓Link','⛓Link')

            ]))


        )

    })
    ///link friends
    bot.action('⛓Link',ctx=>{
        ctx.replyWithHTML("https://t.me/extrahashbot?start="+ctx.from.id)
            .then(()=>{
              ctx.answerCbQuery("Referral link generated",true)
            })

    })

})
/////macines
bot.hears('🤖Machines',ctx => {
    ctx.replyWithHTML("ʙᴜʏ ʜᴀʜᴘᴏᴡᴇʀ ᴍɪɴɪɴɢ ᴍᴀᴄʜɪɴᴇs ᴛᴏ sᴛᴀʀᴛ ᴍɪɴɪɴɢ ʙᴛᴄ\n\nʏᴏᴜ ᴄᴀɴ ʙᴜʏ ᴀs ᴍᴀɴʏ ᴍᴀᴄʜɪɴᴇs ᴀs ʏᴏᴜ ᴡᴀɴᴛ ᴇᴠᴇɴ ᴏꜰ ᴛʜᴇ sᴀᴍᴇ ᴛʏᴘᴇ",Markup
        .keyboard([
            ['🤖My Machines','⛽️🇲 🇪 🇳 🇺']
        ])
        .resize()
        .extra()
    )
        .then(()=> {
            ctx.replyWithHTML("<b>Hash 1</b>\n\nᴘʀɪᴄᴇ: 0.001 ฿ \nʜᴀsʜᴘᴏᴡᴇʀ: 100⚡️\n\nᴍɪɴɪɴɢ:0.0005 ฿ ᴘᴇʀ ᴅᴀʏ\n\nᴇxᴘɪʀᴇs ᴀꜰᴛᴇʀ 30 ᴅᴀʏs\n\n➕ᴛᴏᴛᴀʟ ᴘʀᴏꜰɪᴛ: 0.015฿", Extra
                .HTML()
                .markup((m) => m.inlineKeyboard([
                    m.callbackButton('➕Buy Hash 1', '➕Buy Hash 1')
                ]))
            )
                //hash2
                .then(()=> {
                    ctx.replyWithHTML("<b>Hash 2</b>\n\nᴘʀɪᴄᴇ: 0.01 ฿ \nʜᴀsʜᴘᴏᴡᴇʀ: 1000⚡️\n\nᴍɪɴɪɴɢ:0.005 ฿ ᴘᴇʀ ᴅᴀʏ\n\nᴇxᴘɪʀᴇs ᴀꜰᴛᴇʀ 30 ᴅᴀʏs\n\n➕ᴛᴏᴛᴀʟ ᴘʀᴏꜰɪᴛ: 0.15฿", Extra
                        .HTML()
                        .markup((m) => m.inlineKeyboard([
                            m.callbackButton('➕Buy Hash 2', '➕Buy Hash 2')
                        ]))
                    )
                    /////hash 3
                        .then(() => {
                            ctx.replyWithHTML("<b>Hash 3</b>\n\nᴘʀɪᴄᴇ: 0.02 ฿ \nʜᴀsʜᴘᴏᴡᴇʀ: 2000⚡️\n\nᴍɪɴɪɴɢ:0.007 ฿ ᴘᴇʀ ᴅᴀʏ\n\nᴇxᴘɪʀᴇs ᴀꜰᴛᴇʀ 30 ᴅᴀʏs\n\n➕ᴛᴏᴛᴀʟ ᴘʀᴏꜰɪᴛ: 0.21฿", Extra
                                .HTML()
                                .markup((m) => m.inlineKeyboard([
                                    m.callbackButton('➕Buy Hash 3', '➕Buy Hash 3')
                                ]))
                            )
                            ///hash 4
                                .then(() => {
                                    ctx.replyWithHTML("<b>Hash 4</b>\n\nᴘʀɪᴄᴇ: 0.05 ฿ \nʜᴀsʜᴘᴏᴡᴇʀ: 5000⚡️\n\nᴍɪɴɪɴɢ:0.009 ฿ ᴘᴇʀ ᴅᴀʏ\n\nᴇxᴘɪʀᴇs ᴀꜰᴛᴇʀ 30 ᴅᴀʏs\n\n➕ᴛᴏᴛᴀʟ ᴘʀᴏꜰɪᴛ: 0.27฿", Extra
                                        .HTML()
                                        .markup((m) => m.inlineKeyboard([
                                            m.callbackButton('➕Buy Hash 4', '➕Buy Hash 4')
                                        ]))
                                    )
                                    /////hash 5
                                        .then(() => {
                                            ctx.replyWithHTML("<b>Hash 5</b>\n\nᴘʀɪᴄᴇ: 0.1 ฿ \nʜᴀsʜᴘᴏᴡᴇʀ: 10000⚡️\n\nᴍɪɴɪɴɢ:0.01 ฿ ᴘᴇʀ ᴅᴀʏ\n\nᴇxᴘɪʀᴇs ᴀꜰᴛᴇʀ 30 ᴅᴀʏs\n\n➕ᴛᴏᴛᴀʟ ᴘʀᴏꜰɪᴛ: 0.3฿", Extra
                                                .HTML()
                                                .markup((m) => m.inlineKeyboard([
                                                    m.callbackButton('➕Buy Hash 5', '➕Buy Hash 5')
                                                ]))
                                            )
                                            ////hash 6
                                                .then(() => {
                                                    ctx.replyWithHTML("<b>Hash 6</b>\n\nᴘʀɪᴄᴇ: 0.2 ฿ \nʜᴀsʜᴘᴏᴡᴇʀ: 20000⚡️\n\nᴍɪɴɪɴɢ:0.02 ฿ ᴘᴇʀ ᴅᴀʏ\n\nᴇxᴘɪʀᴇs ᴀꜰᴛᴇʀ 30 ᴅᴀʏs\n\n➕ᴛᴏᴛᴀʟ ᴘʀᴏꜰɪᴛ: 0.6฿", Extra
                                                        .HTML()
                                                        .markup((m) => m.inlineKeyboard([
                                                            m.callbackButton('➕Buy Hash 6', '➕Buy Hash 6')
                                                        ]))
                                                    )


                                                })
                                        })
                                })
                        })
                })


        })


})

//my machines
bot.hears('🤖My Machines',ctx => {
    con.query("SELECT ant1,ant2,ant3,ant4,ant5,ant6 FROM account WHERE id="+ctx.from.id,function (err,res) {
        ctx.replyWithHTML("ʜᴀsʜ1: <b>"+res[0].ant1+"</b>\n\n"+
            "ʜᴀsʜ2: <b>"+res[0].ant2+"</b>\n\n"+
            "ʜᴀsʜ3: <b>"+res[0].ant3+"</b>\n\n"+
            "ʜᴀsʜ4: <b>"+res[0].ant4+"</b>\n\n"+
            "ʜᴀsʜ5: <b>"+res[0].ant5+"</b>\n\n"+
            "ʜᴀsʜ6: <b>"+res[0].ant6+"</b>"



        )


    })



})
    ////buy machines
bot.action('➕Buy Hash 1',ctx=>{
    con.query("SELECT balance FROM account WHERE id="+ctx.from.id,function (err,res) {
        var balance=0.001
        var hashpower=100
        if (res[0].balance>=balance){
            con.query("UPDATE account SET balance=`balance`-"+balance+",ant1=`ant1`+1,hashpower=`hashpower`+"+hashpower+" WHERE id="+ctx.from.id,function (err,res) {
                ctx.answerCbQuery("Machine successfully bought")

            })
        }else {
            ctx.answerCbQuery("🥺Your balance isnt enough for the requested purchase",true)

        }
        
        
        
    })
    
    
})
///hash 2
bot.action('➕Buy Hash 2',ctx=>{
    con.query("SELECT balance FROM account WHERE id="+ctx.from.id,function (err,res) {
        var balance=0.01
        var hashpower=1000
        if (res[0].balance>=balance){
            con.query("UPDATE account SET balance=`balance`-"+balance+",ant2=`ant2`+1,hashpower=`hashpower`+"+hashpower+" WHERE id="+ctx.from.id,function (err,res) {
                ctx.answerCbQuery("Machine successfully bought")

            })
        }else {
            ctx.answerCbQuery("🥺Your balance isnt enough for the requested purchase",true)

        }



    })


})
///hash 3
bot.action('➕Buy Hash 3',ctx=>{
    con.query("SELECT balance FROM account WHERE id="+ctx.from.id,function (err,res) {
        var balance=0.02
        var hashpower=2000
        if (res[0].balance>=balance){
            con.query("UPDATE account SET balance=`balance`-"+balance+",ant3=`ant3`+1,hashpower=`hashpower`+"+hashpower+" WHERE id="+ctx.from.id,function (err,res) {
                ctx.answerCbQuery("Machine successfully bought")

            })
        }else {
            ctx.answerCbQuery("🥺Your balance isnt enough for the requested purchase",true)

        }



    })


})
///hash 4
bot.action('➕Buy Hash 4',ctx=>{
    con.query("SELECT balance FROM account WHERE id="+ctx.from.id,function (err,res) {
        var balance=0.05
        var hashpower=5000
        if (res[0].balance>=balance){
            con.query("UPDATE account SET balance=`balance`-"+balance+",ant4=`ant4`+1,hashpower=`hashpower`+"+hashpower+" WHERE id="+ctx.from.id,function (err,res) {
                ctx.answerCbQuery("Machine successfully bought")

            })
        }else {
            ctx.answerCbQuery("🥺Your balance isnt enough for the requested purchase",true)

        }



    })


})
///hash 5
bot.action('➕Buy Hash 5',ctx=>{
    con.query("SELECT balance FROM account WHERE id="+ctx.from.id,function (err,res) {
        var balance=0.1
        var hashpower=10000
        if (res[0].balance>=balance){
            con.query("UPDATE account SET balance=`balance`-"+balance+",ant5=`ant5`+1,hashpower=`hashpower`+"+hashpower+" WHERE id="+ctx.from.id,function (err,res) {
                ctx.answerCbQuery("Machine successfully bought")

            })
        }else {
            ctx.answerCbQuery("🥺Your balance isnt enough for the requested purchase",true)

        }



    })


})
////hash 6
bot.action('➕Buy Hash 6',ctx=>{
    con.query("SELECT balance FROM account WHERE id="+ctx.from.id,function (err,res) {
        var balance= 0.2
        var hashpower=20000
        if (res[0].balance>=balance){
            con.query("UPDATE account SET balance=`balance`-"+balance+",ant6=`ant6`+1,hashpower=`hashpower`+"+hashpower+" WHERE id="+ctx.from.id,function (err,res) {
                ctx.answerCbQuery("Machine successfully bought")

            })
        }else {
            ctx.answerCbQuery("🥺Your balance isnt enough for the requested purchase",true)

        }



    })


})



















///withdraw scene
const withdrawscene = new Scene('withdraw')
withdrawscene.enter((ctx) => {
    var id = ctx.from.id
    var sql = "SELECT withdrawadd,balance from `account` where `id` = '" + id + "'";
    con.query(sql, function (error, results, fields) {
        if (results[0].withdrawadd == "none") {
            ctx.replyWithHTML('<b>withdraw address not set</b>')
            ctx.scene.leave()
        } else {

            rates = require('bitcoin-exchange-rates');

            btcAmount = results[0].balance;

            currency = 'USD';
            rates.fromBTC(btcAmount, currency, function (err, rate) {
                ctx.replyWithHTML('<b>🏵Withdraw funds</b>\n\n ▪️Min withdraw:<b>0.001 BTC</b>\n▪️Your BTC:<b>'+results[0].balance+ '</b> <i>('+rate+' usd)</i>'+'\nWithdraw wallet:<b>'+results[0].withdrawadd+'</b>')
                    .then(() => {
                        ctx.replyWithHTML('<i>Enter the number of BTC you would like to withdraw to your BitCoin Wallet (a minimum of 0.001 BTC)</i>', Markup
                            .keyboard([
                                ['🛑cancel'], // Row1 with 2 buttons
                            ])

                            .resize()
                            .extra())

                    })
            })
        }
    })
})
withdrawscene.leave((ctx) =>  ctx.reply('Main menu', Markup
    .keyboard([
        ['🧳Balance','🤖Machines'],
        ['➕Add btc','➖Withdraw','👨‍👦Invite'],
        ['👁‍🗨Support','⚙️Settings','📊Stats']
    ])

    .resize()
    .extra())
)
withdrawscene.hears('🛑cancel',(ctx => ctx.scene.leave()))
withdrawscene.on('message',ctx => {
    var id = ctx.from.id
    var sql = "SELECT balance,transactions from `account` where `id` = '" + id + "'";
    con.query(sql, function (error, results, fields) {
        if (isNaN(ctx.message.text)) {
            ctx.reply('please enter a valid amount')

        } else if (ctx.message.text < 0.001) {
            ctx.replyWithHTML('The minimum required for withdraw is <b>0.001 BTC</b>')
            ctx.scene.leave()
        } else if (ctx.message.text > results[0].balance) {
            ctx.reply('your balance is not enough for the requested withdrawal')
            ctx.scene.leave()
        }else if (results[0].transactions<0.001) {
            ctx.reply('You need atleast one Deposit 0f 0.001 BTC to withdraw')
            ctx.scene.leave()
        } else {
            var id = ctx.from.id
            var sql = "SELECT balance,withdrawadd from `account` where `id` = '" + id + "'";
            con.query(sql, function (error, results, fields) {
                var payout =ctx.message.text
                var addre = results[0].withdrawadd
                client.getAccount(btc, function (err, account) {
                    account.sendMoney({
                        'to': addre,
                        'amount': payout,
                        'currency': 'BTC'
                    }, function (err, tx) {
                        var trans='https://www.blockchain.com/btc/address/'+results[0].withdrawadd
                        ctx.telegram.sendMessage('@extrahashpayouts', '<b>💰 Withdraw</b>  \n<b>📦 Investor:</b> ' + ctx.from.first_name + '\n<b>💶 Amount:</b>'+payout+'\n\n   📉<a href="'+trans+'">view transaction</a>\n<b>🔴 Bot: @LegitMiningPro_Bot</b>',Extra
                            .HTML())

                        ctx.telegram.sendMessage(411002680,'Admin please process this withdraw\n\n<b>User:</b> '+ctx.from.id+'('+ctx.from.first_name+')'+'\n\n<b>Amount:</b> '+payout+'\n\n<b>To address:</b> <code>'+results[0].withdrawadd+'</code>',Extra
                            .HTML()
                        )
                        var user = ctx.from.id
                        var amount = ctx.message.text
                        var sqla = "update `account` set `balance` =`balance`- '" + amount  + "', transactions =`transactions`+ " + payout + " where `id` = '" + user + "'";
                        con.query(sqla)
                        ctx.replyWithHTML('Your withdrawal of ' + payout + ' BTC is being processed', Markup
                            .keyboard([
                                ['🧳Balance','🤖Machines'],
                                ['➕Add btc','➖Withdraw','👨‍👦Invite'],
                                ['👁‍🗨Support','⚙️Settings','📊Stats']
                            ])

                            .resize()
                            .extra())

                        /////payouts
                        var useri = {
                            id:ctx.from.id,
                            amount:payout,
                            time:new Date()
                        };
                        con.query("insert into `payouts` SET ?", useri)




                        ctx.scene.leave()
                    });
                });


            })
        }
    })
})


//////////ticket scene
const ticketScene = new Scene('ticket')
ticketScene.enter((ctx) => ctx.replyWithHTML('<b>Ticket System</b>',Markup
    .keyboard([
        ['🛑cancel'] // Row1 with 2 buttons
    ])

    .resize()
    .extra())
    .then(()=>{
        ctx.replyWithHTML('When you have any problems, send us a question. Our staff will check and answer all the questions you have.\n\n🔻 Enter your question:',Extra
            .HTML()
            .markup((m)=>m.inlineKeyboard([
                m.urlButton("Admin","https://t.me/Extrahashsupport"),
                m.urlButton("payouts","https://t.me/extrahashpayouts"),
                m.urlButton("Group","https://t.me/extrahashchat")

            ],{columns:1}))




        )



    })


)
ticketScene.hears('🛑cancel',ctx => {
    ctx.reply('Main menu', Markup
        .keyboard([
            ['🧳Balance','🤖Machines'],
            ['➕Add btc','➖Withdraw','👨‍👦Invite'],
            ['👁‍🗨Support','⚙️Settings','📊Stats']
        ])

        .resize()
        .extra())
    ctx.scene.leave()



})
ticketScene.on('message',ctx => {
    ctx.telegram.sendMessage(411002680,'<b>🔉new ticket </b>from '+ctx.from.first_name+'\n<b>id:</b><code>'+ctx.from.id+'</code>\n\n\n'+ctx.message.text,Extra
        .HTML()
        .markup((m) => m.inlineKeyboard([
            m.callbackButton('🔔Reply', '🔔Reply')

        ], {columns: 3})))
        .then(()=> {
            ctx.replyWithHTML('✅ Your question has been moved to the support center and will be answered before 24 hours.', Markup
                .keyboard([
                    ['🧳Balance','🤖Machines'],
                    ['➕Add btc','➖Withdraw','👨‍👦Invite'],
                    ['👁‍🗨Support','⚙️Settings','📊Stats']
                ])

                .resize()
                .extra())
            ctx.scene.leave()
        })
})

///reply scene
const ticketreplyScene = new Scene('ticketreply')
ticketreplyScene.enter((ctx) => ctx.replyWithHTML('<b>Ticket Reply</b>',Markup
    .keyboard([
        ['🛑cancel'] // Row1 with 2 buttons
    ])

    .resize()
    .extra())
    .then(()=>{
        ctx.replyWithHTML('enter the id provided by the ticket below to reply to the ticket')

    })


)
ticketreplyScene.hears('🛑cancel',ctx => {
    ctx.reply('Main menu', Markup
        .keyboard([
            ['🧳Balance','🤖Machines'],
            ['➕Add btc','➖Withdraw','👨‍👦Invite'],
            ['👁‍🗨Support','⚙️Settings','📊Stats']
        ])

        .resize()
        .extra())
    ctx.scene.leave()



})
ticketreplyScene.on('message',ctx=>{
    var ide = 411002680;
    var sqli = "update `account` set `ticket` = '" + ctx.message.text + "' where `id` = '" + ide + "'";
    con.query(sqli)
    ctx.replyWithHTML('done')
        .then(()=> {
            ctx.scene.enter('reply')
        })





})


///reply
const replyScene = new Scene('reply')
replyScene.enter((ctx) => ctx.replyWithHTML('<b>Ticket Reply</b>',Markup
    .keyboard([
        ['🛑cancel'] // Row1 with 2 buttons
    ])

    .resize()
    .extra())
    .then(()=>{
        ctx.replyWithHTML('enter the reply message below')

    })


)
replyScene.hears('🛑cancel',ctx => {
    ctx.reply('Main menu', Markup
        .keyboard([
            ['🧳Balance','🤖Machines'],
            ['➕Add btc','➖Withdraw','👨‍👦Invite'],
            ['👁‍🗨Support','⚙️Settings','📊Stats']
        ])

        .resize()
        .extra())
    ctx.scene.leave()



})

replyScene.on('message',ctx => {
    var ide=411002680;
    var sqla = "SELECT `ticket` from `account` where `id` = '" + ide + "'";
    con.query(sqla,function (err,res) {
        ctx.reply('✅Ticket sent', Markup
            .keyboard([
                ['🧳Balance','🤖Machines'],
                ['➕Add btc','➖Withdraw','👨‍👦Invite'],
                ['👁‍🗨Support','⚙️Settings','📊Stats']
            ])

            .resize()
            .extra())
        ctx.telegram.sendMessage(res[0].ticket, '✅ You have new message from Support Team\n\n' + ctx.message.text)
        ctx.scene.leave()

    })

})
///set address
const greeterScene = new Scene('greeter')
greeterScene.enter((ctx) => ctx.reply('send your BTC wallet address to be used for withdrawals below to update it',Markup
    .keyboard([
        ['🛑cancel'] // Row1 with 2 buttons
    ])

    .resize()
    .extra())



)
greeterScene.hears('🛑cancel',ctx => {
    ctx.reply('Main menu', Markup
        .keyboard([
            ['🧳Balance','🤖Machines'],
            ['➕Add btc','➖Withdraw','👨‍👦Invite'],
            ['👁‍🗨Support','⚙️Settings','📊Stats']
        ])

        .resize()
        .extra())
    ctx.scene.leave()



})
greeterScene.on('message', (ctx) => {
    var valid = WAValidator.validate(ctx.message.text, 'BTC');
    if (valid) {
        var ide = ctx.from.id
        var sqli = "update `account` set `withdrawadd` = '" + ctx.message.text + "' where `id` = '" + ide + "'";
        con.query(sqli)
        ctx.replyWithHTML('<b>withdraw address updated</b>', Markup
            .keyboard([
                ['🧳Balance','🤖Machines'],
                ['➕Add btc','➖Withdraw','👨‍👦Invite'],
                ['👁‍🗨Support','⚙️Settings','📊Stats']
            ])

            .resize()
            .extra())
        ctx.scene.leave()

    } else {
        ctx.reply('invalid BTC address', Markup
            .keyboard([
                ['🛑cancel']
            ])

            .resize()
            .extra())

    }
})


////
bot.hears('📊Stats',ctx => {
    con.query('SELECT `id` FROM `account`', function (error, result) {
        con.query('SELECT SUM(transactions)FROM account;', function (err, response) {
            const re = JSON.parse(JSON.stringify(response[0]).replace('SUM(transactions)', 'suma'))
            con.query('SELECT `started` FROM `account` WHERE `id`=411002680', function (err, respa) {
                ctx.replyWithHTML('<b>📈Stastistics</b>\n\n📈ᴅᴀʏs ᴏɴʟɪɴᴇ: ' + respa[0].started + '\n\n😊ᴍᴇᴍʙᴇʀs: ' + result.length + '\n\n💼ᴛᴏᴛᴀʟ ᴛʀᴀɴsᴀᴄᴛᴇᴅ: ' + re.suma + ' ฿ ', Markup
                    .keyboard([
                        ['⛽️🇲 🇪 🇳 🇺']  // Row1 with 2 buttons
                    ])

                    .resize()
                    .extra())
                    .then(() => {
                        ctx.replyWithHTML('<b>🔻Recent transactions 👇🏻</b>', Extra
                            .HTML()
                            .markup((m) => m.inlineKeyboard([
                                m.urlButton('🔻Recent transactions', 'https://t.me/extrahashpayouts')

                            ], {columns: 1})))
                    })
            })
        })
    })
})


//scenes
const stage = new Stage([greeterScene,withdrawscene,ticketScene,ticketreplyScene,replyScene], { ttl: 18000000 })
bot.use(session())
bot.use(stage.middleware())
bot.hears('⚙️Settings', enter('greeter'))
bot.hears('➖Withdraw',enter('withdraw'))
bot.hears('👁‍🗨Support',enter('ticket'))
bot.action('🔔Reply', enter('ticketreply'))

///////////cron jobs
//days on
cron.schedule('0 0 0 * * *', () => {
    con.query('update account set `started`=`started`+1 WHERE `id`=411002680')

})
///ant1
cron.schedule('0 0 0 * * *', () => {
    let balance=0.0005
    con.query("UPDATE account SET balance=`balance`+`ant1`*"+balance+",day=`day`+1 WHERE ant1>=1")

})
//ant2
cron.schedule('0 0 0 * * *', () => {
    let balance=0.01
    con.query("UPDATE account SET balance=`balance`+`ant2`*"+balance+",day=`day`+1 WHERE ant2>=1")

})
////ant3
cron.schedule('0 0 0 * * *', () => {
    let balance=0.02
    con.query("UPDATE account SET balance=`balance`+`ant3`*"+balance+",day=`day`+1 WHERE ant3>=1")

})
/////ant4
cron.schedule('0 0 0 * * *', () => {
    let balance= 0.05
    con.query("UPDATE account SET balance=`balance`+`ant4`*"+balance+",day=`day`+1 WHERE ant4>=1")

})
////ant5
cron.schedule('0 0 0 * * *', () => {
    let balance= 0.1
    con.query("UPDATE account SET balance=`balance`+`ant5`*"+balance+",day=`day`+1 WHERE ant5>=1")

})
/////ant6
cron.schedule('0 0 0 * * *', () => {
    let balance=0.2
    con.query("UPDATE account SET balance=`balance`+`ant6`*"+balance+",day=`day`+1 WHERE ant6>=1")

})
//ref
cron.schedule('0 0 0 * * *', () => {
    let balance=0.000001
    con.query("UPDATE account SET balance=`balance`+`friends`*"+balance+" WHERE friends>=1")

})

bot.startPolling()
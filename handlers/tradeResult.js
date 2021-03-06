
module.exports = function (tradeID, tradeResponse, steamID) {

  var stem = this;

  // Trade request was accepted
  if (!tradeResponse)
    return;

  stem.log.warn('Trade request was not accepted, resending in 3 seconds');

  // Trade request wasn't accepted, retry in a few seconds
  setTimeout(function () {

    stem.bot.trade(steamID);

  }, 3000);

};

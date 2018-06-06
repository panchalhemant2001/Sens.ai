let getOverallSentiments = require('./Data_Processing/OverallSentiments')
let getSpecificSentiments = require('./Data_Processing/SpecificSentiments')
let postsAnalyzer = require('./AI_Modules/MasterAnalyzer')

async function computeData(posts) {

    let analyzedPosts = await postsAnalyzer(posts)
    let overallSentiments = await getOverallSentiments(analyzedPosts)
    let specificSentiments = await getSpecificSentiments(analyzedPosts)

    return {
      overallHowManyWere: overallSentiments,
      specificHowManyWere: specificSentiments
    }

}

module.exports = computeData

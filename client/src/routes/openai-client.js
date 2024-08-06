import axios from 'axios';
import {submitQuestionData} from './api';

const apiUrl = 'https://api.openai.com/v1/chat/completions';
const token = 'sk-proj-DyGgtGZ3FoXe8Vvy3crBT3BlbkFJjORNYIEIAQK4Ukkpglxp';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    //'Cookie': '__cf_bm=vkqiYNdzOzP7YxEZKHl9hH5QWlunk_KYfRqq1ssGMNc-1722973360-1.0.1.1-DgbDSFPrNDlM7yVNmgoqfoL0huN5aR4ZJMv72WpoyodQCaR5MXdsTsSDvorQyAdCQGQcpisBEU8fyx6xioM1gw; _cfuvid=inxq1DfZpmP3onCV8vj1X3qj20aPZLS0iaO5DPFa_HA-1722973360323-0.0.1.1-604800000'
};

const requestData = {
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: 'Say this is a test!' }],
    temperature: 0.7
};

async function fetchOpenAI(request, employeeId) {
    try {
        requestData.messages[0].content = request;
        await axios.post(apiUrl, requestData, { headers })
            .then(response => {
                const responseContent = response.data.choices[0].message.content;
                console.log(responseContent);
                submitQuestionData({ request: request, response: responseContent, employeeId: employeeId});
                return response.data;
            })
            .catch(error => {
                console.error(error);
                // Handle any errors that occur during the request
            });
    } catch (error) {
            console.error(error);
    }
}    

export { fetchOpenAI };

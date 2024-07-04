function initialize_chat_environment(endpoint) {
    var show_help_button = true
    var containers = document.getElementsByClassName('chat-container')
    if (containers && containers.length) {
        show_help_button = [].slice.call(containers)
            .reduce(function (agg, container) {
                var chat_type = container.getAttribute('data-chat-type')
                return (chat_type && chat_type === 'sales-force') ? false : agg
            }, show_help_button)
    }

    embedded_svc.settings.displayHelpButton = show_help_button;
    embedded_svc.settings.directToButtonRouting = function () {
        var cancerCheck = document.getElementById('queue1');
        var donationCheck = document.getElementById('queue2');
        if (cancerCheck.checked)
            return '5731L000000PWhL';
        if (donationCheck.checked)
            return '5731L000000PWhG';
    };
    
	embedded_svc.init('https://americancancersociety.my.salesforce.com', 'https://volunteercommunity.cancer.org/', endpoint, '00D41000000TwgH', 'ACS_Live_Chat_Agents_Common_Group',
	{
		baseLiveAgentContentURL: 'https://c.la3-core1.sfdc-yfeipo.salesforceliveagent.com/content',
		deploymentId: '5721L000000PVrN',
		buttonId: '5731L000000PWhB',
		baseLiveAgentURL: 'https://d.la3-core1.sfdc-yfeipo.salesforceliveagent.com/chat',
		eswLiveAgentDevName: 'ACS_Live_Chat_Agents_Common_Group',
		isOfflineSupportEnabled: false
	});
	/*
    embedded_svc.init('https://americancancersociety.my.salesforce.com', 'https://volunteercommunity.cancer.org/', endpoint, '00D41000000TwgH', 'ACS_Live_Chat_Agents_Common_Group',
    {
        baseLiveAgentContentURL: 'https://c.la5-c1-ia4.salesforceliveagent.com/content',
        deploymentId: '5721L000000PVrN',
        buttonId: '5731L000000PWhB',
        baseLiveAgentURL: 'https://d.la5-c1-ia4.salesforceliveagent.com/chat',
        eswLiveAgentDevName: 'ACS_Live_Chat_Agents_Common_Group',
        isOfflineSupportEnabled: false
    });
	*/
}

if (!window.geoip2) {
    var geo_script = document.createElement('script');
    geo_script.setAttribute('src', '//geoip-js.com/js/apis/geoip2/v2.1/geoip2.js');
    document.body.appendChild(geo_script);
}

if (!window.embedded_svc) {
    var chat_script = document.createElement('script');
    chat_script.onload = function () {
        initialize_chat();
        initialize_chat_environment('https://service.force.com');
    };

    // script location of embedded_svc
    chat_script.setAttribute('src', 'https://americancancersociety.my.salesforce.com/embeddedservice/5.0/esw.min.js');
    document.body.appendChild(chat_script);
}
else {
    initialize_chat();
    initialize_chat_environment('https://service.force.com');
}
sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'interactionitemsnew/test/integration/FirstJourney',
		'interactionitemsnew/test/integration/pages/Interactions_HeaderList',
		'interactionitemsnew/test/integration/pages/Interactions_HeaderObjectPage',
		'interactionitemsnew/test/integration/pages/Interactions_ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Interactions_HeaderList, Interactions_HeaderObjectPage, Interactions_ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('interactionitemsnew') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheInteractions_HeaderList: Interactions_HeaderList,
					onTheInteractions_HeaderObjectPage: Interactions_HeaderObjectPage,
					onTheInteractions_ItemsObjectPage: Interactions_ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);
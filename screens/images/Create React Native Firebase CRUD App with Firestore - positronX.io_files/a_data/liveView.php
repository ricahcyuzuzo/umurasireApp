
                        try
                        {
                            var linksArray = '  https://live.primis.tech/content/video/hls/hls.0.12.4_2.min.js  https://live.primis.tech/content/prebid/prebidVid.4.43.0_6.min.js   https://live.primis.tech/live/liveVideo.php?vpaidManager=sekindo&s=58057&ri=6C69766553746174737C736B317B54307D7B64323032312D30392D31395F31377D7B7331323030323538367D7B4335357D7B53643364334C6E427663326C30636D39756543357062773D3D7D7B6266697265666F787D7B716465736B746F707D7B6F6C696E75787D7B583631357D7B593334367D7B66317D7B4C363133307DFEFE&userIpAddr=41.186.78.95&userUA=Mozilla%2F5.0+%28X11%3B+Ubuntu%3B+Linux+x86_64%3B+rv%3A87.0%29+Gecko%2F20100101+Firefox%2F87.0&debugInformation=&isWePassGdpr=1&noViewableMidrollPolicy=vary&isDoublePreroll=1&autoSkipVideoSec=30&c2pWaitTime=10&csuuid=61474b3a97621&debugInfo=12002586_&debugPlayerSession=&pubUrlDEMO=&isAsyncDEMO=0&customPlaylistIdDEMO=&sta=12002586&showLogo=0&clkUrl=&plMult=-1&schedule=eyJwcmVfcm9sbCI6MSwibWlkX3JvbGwiOltdLCJnYXAiOiJhdXRvIn0%3D&content=plembed155blkzgtxiv&secondaryContent=&x=615&y=346&pubUrl=https%3A%2F%2Fwww.positronx.io%2Fcreate-react-native-firebase-crud-app-with-firestore%2F&contentNum=1&flow_closeBtn=1&flowCloseTimeout=0&flow_closeButtonPosition=right&flow_direction=tr&flow_horizontalOffset=1&flow_bottomOffset=60&impGap=2&flow_width=350&flow_height=197&videoType=flow&gdpr=0&gdprConsent=&contentFeedId=&geoLati=-1.9507&geoLong=30.0663&vpTemplate=6130&flowMode=both&isRealPreroll=0&playerApiId=&isApp=0&ccpa=0&ccpaConsent='.split(' ');

                            for(var l = 0; l < linksArray.length; l++)
                            {
                                if(linksArray[l].length > 10)
                                {
                                    var sc = document.createElement('script');
                                    sc.type = 'text/javascript';
                                    sc.async = false;
                                    sc.src = linksArray[l];
                                    document.head.appendChild(sc);
                                }
                            }
                        }
                        catch(e)
                        {
                            document.write('<script type="text/javascript" src="https://live.primis.tech/content/video/hls/hls.0.12.4_2.min.js">\x3C/script><script type="text/javascript" src="https://live.primis.tech/content/prebid/prebidVid.4.43.0_6.min.js">\x3C/script><script type=' + "'" + 'text/javascript' + "'" + ' language=' + "'" + 'javascript' + "'" + ' src="https://live.primis.tech/live/liveVideo.php?vpaidManager=sekindo&s=58057&ri=6C69766553746174737C736B317B54307D7B64323032312D30392D31395F31377D7B7331323030323538367D7B4335357D7B53643364334C6E427663326C30636D39756543357062773D3D7D7B6266697265666F787D7B716465736B746F707D7B6F6C696E75787D7B583631357D7B593334367D7B66317D7B4C363133307DFEFE&userIpAddr=41.186.78.95&userUA=Mozilla%2F5.0+%28X11%3B+Ubuntu%3B+Linux+x86_64%3B+rv%3A87.0%29+Gecko%2F20100101+Firefox%2F87.0&debugInformation=&isWePassGdpr=1&noViewableMidrollPolicy=vary&isDoublePreroll=1&autoSkipVideoSec=30&c2pWaitTime=10&csuuid=61474b3a97621&debugInfo=12002586_&debugPlayerSession=&pubUrlDEMO=&isAsyncDEMO=0&customPlaylistIdDEMO=&sta=12002586&showLogo=0&clkUrl=&plMult=-1&schedule=eyJwcmVfcm9sbCI6MSwibWlkX3JvbGwiOltdLCJnYXAiOiJhdXRvIn0%3D&content=plembed155blkzgtxiv&secondaryContent=&x=615&y=346&pubUrl=https%3A%2F%2Fwww.positronx.io%2Fcreate-react-native-firebase-crud-app-with-firestore%2F&contentNum=1&flow_closeBtn=1&flowCloseTimeout=0&flow_closeButtonPosition=right&flow_direction=tr&flow_horizontalOffset=1&flow_bottomOffset=60&impGap=2&flow_width=350&flow_height=197&videoType=flow&gdpr=0&gdprConsent=&contentFeedId=&geoLati=-1.9507&geoLong=30.0663&vpTemplate=6130&flowMode=both&isRealPreroll=0&playerApiId=&isApp=0&ccpa=0&ccpaConsent=">\x3C/script>');
                        }
                        
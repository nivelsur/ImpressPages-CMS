var ipAdministratorsController = null;

(function ($) {
    "use strict";


    var app = angular.module('Administrators', []);

    app.run(function ($rootScope) {
        $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
            $rootScope.$broadcast('PathChanged', newUrl);
        });
    });

    ipAdministratorsController = function ($scope, $location) {
        //init
        $scope.administrators = ipAdministrators;
        $scope.activeAdministrator = null;

        console.log(ipAdministrators);
    };

    var ipAdministratorsController2 = function ($scope, $location) {



        //init
        $scope.administrators = ipAdministrators;
        $scope.activeAdministrator = null;


        $scope.$on('PathChanged', function (event, path) {
            var administratorId = getHashParams().administrator;
            if (administratorId) {
                $scope.activateAdministrator(administratorId);
            }
        });


        $scope.setAdministratorHash = function (administrator) {
            updateHash(null, administrator.id, false);
        }

        $scope.activateAdministrator = function (administrator) {
            $scope.activeAdministrator = administrator;
        }

        $scope.addAdministratorModal = function () {
//            var $modal = $('.ipsAddModal');
//            $modal.find('input[name=title]').val('');
//            $modal.modal();
//
//
//            $modal.find('.ipsAdd').off('click').on('click', function () {
//                $modal.find('form').submit()
//            });
//            $modal.find('form').off('submit').on('submit', function (e) {
//                e.preventDefault();
//                var title = $modal.find('input[name=title]').val();
//                var visible = $modal.find('input[name=visible]').is(':checked') ? 1 : 0;
//                addPage(title, visible);
//                $modal.modal('hide');
//            });
        }


        $scope.updateAdministratorModal = function (zone) {
//            var $modal = $('.ipsUpdateZoneModal');
//            $modal.modal();
//
//            var data = {
//                aa: 'Pages.updateZoneForm',
//                zoneName: zone.name
//            }
//
//            $.ajax({
//                type: 'GET',
//                url: ip.baseUrl,
//                data: data,
//                context: this,
//                success: function (response) {
//                    $modal.find('.ipsBody').html(response.html);
//                    $modal.find('.ipsDelete').off('click').on('click', function () {
//                        $modal.find('.ipsDeleteConfirmation').removeClass('ipgHide');
//                        $modal.find('.ipsBody').addClass('ipgHide');
//                        $modal.find('.ipsDelete').addClass('ipgHide');
//                        $modal.find('.ipsModalActions').addClass('ipgHide');
//                        $modal.find('.ipsDeleteProceed').off('click').on('click', function () {
//                            deleteZone(zone.name);
//                        });
//                    });
//                    $modal.find('.ipsDeleteCancel').off('click').on('click', function () {
//                        $modal.find('.ipsDeleteConfirmation').addClass('ipgHide');
//                        $modal.find('.ipsBody').removeClass('ipgHide');
//                        $modal.find('.ipsDelete').removeClass('ipgHide');
//                        $modal.find('.ipsModalActions').removeClass('ipgHide');
//                        $modal.find('.ipsDeleteProceed').off('click');
//                    });
//
//                    $modal.find('.ipsSave').off('click').on('click', function () {
//                        $modal.find('form').submit()
//                    });
//                    $modal.find('form').off('submit').on('submit', function (e) {
//                        e.preventDefault();
//                        var title = $modal.find('input[name=title]').val();
//                        var url = $modal.find('input[name=url]').val();
//                        var name = $modal.find('input[name=name]').val();
//                        var layout = $modal.find('select[name=layout]').val();
//                        var metaTitle = $modal.find('input[name=metaTitle]').val();
//                        var metaKeywords = $modal.find('input[name=metaKeywords]').val();
//                        var metaDescription = $modal.find('textarea[name=metaDescription]').val();
//                        var languageId = $scope.activeLanguage.id;
//                        updateZone(zone.name, languageId, title, url, name, layout, metaTitle, metaKeywords, metaDescription);
//                        $modal.modal('hide');
//                    });
//
//                },
//                error: function (response) {
//                    if (ip.developmentEnvironment || ip.debugMode) {
//                        alert('Server response: ' + response.responseText);
//                    }
//                },
//                dataType: 'json'
//            });


        }

        var addAdministrator = function (title, visible) {
//            var data = {
//                aa: 'Pages.addPage',
//                securityToken: ip.securityToken,
//                title: title,
//                visible: visible,
//                zoneName: $scope.activeZone.name,
//                languageId: $scope.activeLanguage.id
//            };
//
//            $.ajax({
//                type: 'POST',
//                url: ip.baseUrl,
//                data: data,
//                context: this,
//                success: function (response) {
//                    refresh();
//                },
//                error: function (response) {
//                    if (ip.developmentEnvironment || ip.debugMode) {
//                        alert('Server response: ' + response.responseText);
//                    }
//                },
//                dataType: 'json'
//            });

        }


        var editAdministrator = function (pageId, successCallback) {
//            var data = {
//                aa: 'Pages.getPageUrl',
//                pageId: pageId
//            };
//
//            $.ajax({
//                type: 'GET',
//                url: ip.baseUrl,
//                data: data,
//                context: this,
//                success: function (response) {
//                    window.location = response.pageUrl;
//                },
//                error: function (response) {
//                    if (ip.developmentEnvironment || ip.debugMode) {
//                        alert('Server response: ' + response.responseText);
//                    }
//                },
//                dataType: 'json'
//            });
        }

        var deleteAdministrator = function (pageId, successCallback) {
//            var data = {
//                aa: 'Pages.deletePage',
//                pageId: pageId,
//                securityToken: ip.securityToken
//            };
//
//            $.ajax({
//                type: 'POST',
//                url: ip.baseUrl,
//                data: data,
//                context: this,
//                success: successCallback,
//                error: function (response) {
//                    if (ip.developmentEnvironment || ip.debugMode) {
//                        alert('Server response: ' + response.responseText);
//                    }
//                },
//                dataType: 'json'
//            });
        }


        var updateHash = function (administrator) {
            var path = 'hash&administrator=' + administrator.id;
            $location.path(path);
        }

        var getHashParams = function () {

            var hashParams = {};
            var e,
                a = /\+/g,  // Regex for replacing addition symbol with a space
                r = /([^&;=]+)=?([^&;]*)/g,
                d = function (s) {
                    return decodeURIComponent(s.replace(a, " "));
                },
                q = window.location.hash.substring(1);

            while (e = r.exec(q))
                hashParams[d(e[1])] = d(e[2]);

            return hashParams;
        }


    }


})(ip.jQuery);


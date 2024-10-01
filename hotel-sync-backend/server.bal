import ballerina/http;
import hotel_sync_backend.auth as authSvc;
import hotel_sync_backend.staff as staffSvc;
import hotel_sync_backend.room as roomSvc;
import hotel_sync_backend.booking as bookingSvc;
import hotel_sync_backend.report as reportSvc;
import hotel_sync_backend.service_request as srSvc;

service /hotel on new http:Listener(8080) {

}
# travel-repo
TRAVEL PLATFORM 

Designing out a travel platform with 3 personas of Traveller, Admin and Property Owner
The platform has been shaped by its robustness and ease of use are a testament for the delivery including all non functional requirements.

(Attaching the "db.txt" for all the initial setup of tables)
Featuring out the schema of the 3 actors and other procedurals,

    User - UserId, Name, Email, Password, Role ( Traveller or Admin depending upon the scenarios and needs )
    Property_Owner - OwnerId, Name, Email, Password, Verfied, IsApproved
    Catalogue - CatalogueId, OwnerId, Title, Description, Images
    Bookings - BookingId, CatalogueId, UserId

Basic Add-ons : 
    BCRYPT to store passwords in DB in a secure way
    Granting approval for Property-owners only by ADMIN
    Using JWT with a unique KEY and its ID for authorization
    Sending a VERIFICATION LINK to mail with ENCRYPTED tokens and DECRYPT it 
    Adding USER ROLES for clairty

Crafting each API serving their purposes,

TRAVELLER 
  -  POST /api/v1/signUp?role={userRole} // admin (or) traveller
  -  POST /api/v1/login
  -  GET /api/v1/traveller/:id/catalogue
  -  GET /api/v1/traveller/:id/bookings

ADMIN 
  -  POST /api/v1/signUp?role={userRole}
  -  POST /api/v1/login
  -  PATCH /api/v1/property-owner/:id  // to approve property owner with admin token
  -  GET /api/v1/property-owner/:id/catalogue // to view catalogue under each property owner admin token
  -  GET /api/v1/property-owner // to view all property-owners admin token

PROPERTY-OWNER 
  -  POST /api/v1/property-owner/create
  -  POST /api/v1/property-owner/login
  -  POST /api/v1/property-owner/:id/catalogue // to post catalogues using property-owner token
  -  GET /api/v1/property-owner/verify/:id?token1={token1}&token2={token2} //verification link sent to mail

CATALOGUE
  -  POST /api/v1/property-owner/:id/catalogue // to post catalogues using property-owner token
  -  GET /api/v1/property-owner/:id/catalogue // to view catalogue under each property owner admin token


Dbase = new Mongo.Collection('reso');
if(Meteor.isClient){
    Template.body.helpers({
        reso: function(){
            return Dbase.find();
        }
        
    });
    
    Template.body.events({
        'submit .new-reso': function(event){
           var title = event.target.title.value;
            Dbase.insert({
                title: title,
                CreateAt: new Date()
                
        });    
             event.target.title.value = "";
              return false;
        }
    });
    Template.list.events({
        'click .toggle-checked': function(){
            Dbase.update(this._id,{$set: {checked: !this.checked}});  
        },
        'click .delete': function(){
            Dbase.remove(this._id);
        },
        'click .Update': function(){
            
            
        }
        
    });
        Accounts.ui.config({
           passwordSignupFields: "USERNAME_ONLY"  
        });
}

if(Meteor.isServer){
    Meteor.startup(function (){
        
    });
}
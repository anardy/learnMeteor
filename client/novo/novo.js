Template.novo.events({

  "submit form" : function(event, template) {
    event.preventDefault();

    var input = $('#tarefa');
    var nome =  input.val();

    //Tarefas.insert({ nome : nome, data : new Date() });
    Meteor.call('adiciona', { nome : nome, usuario: this.userId });

    input.val('');
  }
});

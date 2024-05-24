function sgit add member.jskillsMember() {
    var member = {
        name: 'Sunny',
        skills: ['JavaScript', 'React', 'Node'],
        details: function() {
            this.skills.forEach(function(skill) {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };
    member.details();
}   
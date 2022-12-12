use sahirato db.createUser( 
    # Première propriété : user
    { 
        # Attend une chaine de caractère
        user: 'sahirato_backend',
        # Attend égalememt une chaine de caractère, mais peut également attendre une fonction sources de mongodb tel que : "passwordPrompt" (pour demander à l'admin lors de la création le mot de passe directement par le terminal) ou encore ""cleartext password"
        pwd: 'mcNJmDEWQStkbUe^Lm44PK75fGrD6Mrp6qE%psuPWF*Q$2vL1dwQ^jBL%q',
        # Attend un tableau de chaine d'objets
        # Optionnel. Toute information arbitraire. Ce champ peut être utilisé pour stocker toutes les données qu'un administrateur souhaite associer à cet utilisateur particulier. Par exemple, il peut s'agir du nom complet de l'utilisateur ou de l'identifiant de l'employé.
        customData: 
        { 
            employeeId: 12345
        },
        # Les roles : Définition des acces de l'utilisateur 
        # Les rôles accordés à l'utilisateur. Peut spécifier un tableau vide []pour créer des utilisateurs sans rôle.
        roles: [
            # Premier role de l'utilisateur, ici : Affectation du role "clusterAdmin"Fournit le meilleur accès à la gestion des clusters. Ce rôle combine les privilèges accordés par le clusterManager , clusterMonitor , et Rôles HostManager. De plus, le rôle fournit l'action dropDatabase. Sur la base de données "admin"
            # https://www.mongodb.com/docs/manual/reference/built-in-roles/#mongodb-authrole-clusterAdmin
            { role: 'clusterAdmin', db: 'admin' },
            # Deuxième role de l'utilisateur, ici : Affectation du role "readAnyDatabase" soit le droit d'administration sur la base de données "admin"
            # https://www.mongodb.com/docs/manual/reference/built-in-roles/#mongodb-authrole-readAnyDatabase
            { role: 'readAnyDatabase', db: 'admin' },
            # Le rôle "readWrite" permet à l'utilisateur d'accéder à toutes les bases de données et de lire et d'écrire des données dans toutes les collections.
            'readWrite'
        ] 
    }, 
    # Deuxième propriété : writeConcern 
    # Objet contenant les propriétés concernant la confirmation d'écriture et les droits
    # Rédiger la spécification de préoccupation
    # Le problème d'écriture peut inclure les champs suivants :
    # { w: <value>, j: <boolean>, wtimeout: <number> }
    # la
    # dans
    # option pour demander la confirmation que l'opération d'écriture s'est propagée à un nombre spécifié d' mongod instances ou à des mongodinstances avec des balises spécifiées.

    # la
    # j
    # option pour demander la confirmation que l'opération d'écriture a été écrite dans le journal sur disque, et

    # la
    # wtimeout
    # option pour spécifier une limite de temps pour empêcher les opérations d'écriture de se bloquer indéfiniment.
    { 
        w: 'majority' , 
        wtimeout: 5000 
    } 
)
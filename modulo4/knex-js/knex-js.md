```
import { Request, Response } from 'express'
import app from './app'
import connection from './connection';

// Exercício 1
// a) Um array cujo primeiro elemento é um array com a resposta que queremos.
// b)

const getActorByName = async(nome: string) : Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM intro_sql_Actor WHERE nome = "${nome}"
    `)
    return result[0][0]
}

// getActorByName("Andressa")
// .then(result => {
//     console.log(result)
// })
// .catch(err => {
// 	console.log(err)
// });

// c)
const actorsByGender = async(gender: string) : Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM intro_sql_Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
}

// actorsByGender("male")
// .then(result => {
//     console.log(result)
// })
// .catch(err => {
// 	console.log(err)
// });

// Exercício 2
// a)
const updateSalary = async (id: string, salary: number) : Promise<void> => {
    await connection("intro_sql_Actor")
    .update({
        salary: salary
    })
    .where("id", id);
}

// updateSalary("005", 500000)
// .then((res) => {
//     console.log("Salário atualizado com sucesso!")
// })
// .catch((err) => {
// console.log("Houve algum erro")
// })

//b)
const deleteActor = async (id: string) : Promise<void> => {
    await connection("intro_sql_Actor")
    .delete()
    .where("id", id)
}

// deleteActor("005")
// .then((res) => {
//     console.log("Ator deletado com sucesso!")
// }).catch((err) => {
//     console.log("Houve algum erro")
// })

// c)
const avgSalaryByGender = async (gender: string) : Promise<void> => {
    const result = await connection("intro_sql_Actor")
    .avg("salary as average")
    .where("gender", gender)

    const average = result[0].average
    return average
}

// avgSalaryByGender("female")
// .then(res => console.log(res))
// .catch(err => console.log(err))
// avgSalaryByGender("male")
// .then(res => console.log(res))
// .catch(err => console.log(err))

// Exercício 3
// a)
const getActorById = async (id: string): Promise<any> => {

    const result = await connection.raw(`
        SELECT * FROM intro_sql_Actor WHERE id = "${id}"
    `)

    return result[0][0]
}

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});

// b)
app.get("/actors", async (req: Request, res: Response) => {
    try {
        const count = await actorsByGender(req.query.gender as string)
        
        res.status(200).send({
            quantity: count
        })

    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
})

// Exercício 4
// a)
app.put("/actors", async (req: Request, res: Response) => {
    try {
        await updateSalary(req.body.id, req.body.salary)

        res.status(200).send({message: "success"})

    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
})

// b)
app.delete("/actor/:id", async(req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id)
        res.status(200).send({message: "success"})

    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
})

// DESAFIOS 

// Exercício 5

const createMovie = async (
    id: string,
    title: string,
    sinopse: string,
    releaseDate: Date,
    playingLimitDate: Date
) => {
    await connection("intro_sql_Movie").insert({
        id: id,
        title: title,
        sinopse: sinopse,
        release_date: releaseDate,
        playing_limit_date: playingLimitDate
    })
    .into("intro_sql_Movie")
}

app.post("/movie", async(req: Request, res: Response) => {
    try {
        await createMovie(
            req.body.id,
            req.body.title,
            req.body.sinopse,
            req.body.releaseDate,
            req.body.playingLimitDate
        )
        res.status(200).send({message: "success"})

    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
})

/* 
Deu esse erro: 
insert into `intro_sql_Movie` (`id`, `playing_limit_date`, `release_date`, `sinopse`, `title`) values ('009', DEFAULT, DEFAULT, 'Lalalalalallala Blablablablabla Dadadadadad', 'Algum filme') - ER_NO_DEFAULT_FOR_FIELD: Field 'release_date' doesn't have a default value
*/

```
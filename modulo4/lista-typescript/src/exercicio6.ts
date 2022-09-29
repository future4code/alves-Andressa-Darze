const clientAccounts = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type clientType = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

function findingNegativeClients (clientAccounts: clientType[]) : clientType[] {
    const negativeClients = clientAccounts.map((client) => {
        let sum = 0
        for(let debito of client.debitos) {
            sum = sum + debito
        }
        
        return {
            ...client,
            saldoTotal: client.saldoTotal - sum,
            debitos: []
        }

    }).filter((client) => {
        return client.saldoTotal < 0
    })

    return negativeClients
}

console.log(findingNegativeClients(clientAccounts))

import { conexaoFS } from './conexaoFB';

export class AlunoFB{
    state = {
        perfil: conexaoFS.collection('Alunos')
    };

    pegarPerfil(){
        return this.state.perfil;
    }

    adicionarAluno(aluno){
        this.state.perfil.add(aluno);
    }

    editarAluno(aluno){
        const {id} = aluno;
        delete aluno.id;

        this.state.perfil.doc(id).update(aluno);
    }

    removerAluno(aluno){
        this.state.perfil.doc(aluno.id).delete();
    }
}

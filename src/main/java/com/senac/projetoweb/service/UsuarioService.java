package com.senac.projetoweb.service;

import com.senac.projetoweb.model.Usuario;
import com.senac.projetoweb.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public List<Usuario> listarTodos() {

        return repository.findAll();
    }

    public Usuario salvar(Usuario usuario) {
        System.out.println("Salvando usuário no serviço: " + usuario);
        Usuario salvo = repository.save(usuario);
        System.out.println("Usuário salvo no banco: " + salvo);
        return salvo;
    }




}

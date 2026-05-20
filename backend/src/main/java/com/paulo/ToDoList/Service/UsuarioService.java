package com.paulo.ToDoList.Service;

import com.paulo.ToDoList.Dtos.RequestLogin;
import com.paulo.ToDoList.Dtos.RequestUsuario;
import com.paulo.ToDoList.Dtos.ResponseUsuario;
import com.paulo.ToDoList.Entity.Usuario;
import com.paulo.ToDoList.Infra.PasswordEncoder.PasswordConfig;
import com.paulo.ToDoList.Repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    private final UsuarioRepository  usuarioRepository;
    private final PasswordConfig  passwordConfig;

    public UsuarioService(UsuarioRepository usuarioRepository, PasswordConfig passwordConfig) {
        this.usuarioRepository = usuarioRepository;
        this.passwordConfig = passwordConfig;
    }

    @Transactional
    public ResponseUsuario login(RequestLogin  request){
        Usuario usuario = usuarioRepository.findByEmail(request.email())
                .orElseThrow(() -> new RuntimeException("E-mail ou senha inválidos"));

        boolean senhaValida = passwordConfig.passwordEncoder().matches(
                request.password(),
                usuario.getPassword()
        );

        if(!senhaValida){
            throw new RuntimeException("E-mail ou senha inválidos");
        }

        if(!usuario.getAtivo()){
            throw new RuntimeException("Usuário inativo");
        }

        return toResponse(usuario);
    }

    @Transactional
    public ResponseUsuario save(RequestUsuario request) {
        Usuario usuario = new Usuario();

        if(usuarioRepository.existsByEmail(request.email())){
            throw new RuntimeException("Email já cadastrado");
        }
        usuario.setNome(request.nome());
        usuario.setEmail(request.email());
        usuario.setPassword(passwordConfig.passwordEncoder().encode(request.password()));

        Usuario saved = usuarioRepository.save(usuario);

        return toResponse(saved);

    }


    private ResponseUsuario toResponse (Usuario usuario){
        return new ResponseUsuario(
                usuario.getId(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getPassword()
        );
    }
}

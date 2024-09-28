package pl.drunkcom.wellness.models;

import lombok.Data;
import lombok.EqualsAndHashCode;
import pl.drunkcom.core.model.BaseEntity;
import pl.drunkcom.wellness.enumerable.EnumActivityType;

import javax.persistence.*;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Activity extends BaseEntity {

    @Column
    private String name;

    @OneToMany
    private List<Task> tasks;

    @ManyToMany
    private List<Campaign> campaigns;

    //Type enum

    @Enumerated(EnumType.STRING)
    private EnumActivityType type;

    //User
}
